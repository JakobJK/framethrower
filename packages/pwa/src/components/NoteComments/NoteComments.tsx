import * as React from 'react'
import { useGetAllNoteCommentsQuery } from '../../graphql/generated/hooks'
import { NewsComment as NewsCommentType } from '../../graphql/generated/types'
import Pagination from '@material-ui/lab/Pagination'
import SmallComment from '../SmallComment'

const { useState, useEffect } = React

const NoteComment = ({ id }: { id: string }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [vars, setVars] = useState({
    noteId: id,
    offset: currentPage * 10,
  })
  const { loading, error, data } = useGetAllNoteCommentsQuery({
    variables: vars,
  })

  useEffect(() => {
    setVars({ noteId: id, offset: (currentPage - 1) * 10 })
  }, [currentPage])

  const handleChange = (event: React.ChangeEvent<unknown>, page: number) => {
    setVars({ offset: page * 10, noteId: id })
    setCurrentPage(page)
  }

  if (loading) return null
  if (error) return <p>Error :(</p>

  const noteComments = data?.allNoteComments?.nodes ?? []
  const totalCount = data?.allNoteComments?.totalCount ?? 0

  return (
    <>
      <div className='p-4 w-full'>
        {noteComments.map(x => (
          <SmallComment key={`key_${x.id}`} comment={x as NewsCommentType} />
        ))}
      </div>
      {totalCount > 10 && (
        <div className='flex w-full justify-around'>
          <Pagination
            count={Math.ceil((totalCount ?? 0) / 10)}
            size='large'
            shape='rounded'
            page={currentPage}
            onChange={handleChange}
          />
        </div>
      )}
    </>
  )
}
export default NoteComment
