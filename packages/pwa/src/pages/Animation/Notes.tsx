import React, { useState, useEffect } from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import qs from 'qs'
import Note from '../../components/Note'
import Pagination from '@material-ui/lab/Pagination'
import { VNote } from '../../graphql/generated/types'
import { useGetAllNotesQuery } from '../../graphql/generated/hooks'
const gotnonotes = require('../../static/gotnonotes.png')

const Notes = (
  props: RouteComponentProps<{}> & {
    submissionId: string
    currentProfileHasReplied: boolean
    isLatest: boolean
    profeedback: boolean
  }
) => {
  const {
    submissionId,
    currentProfileHasReplied,
    isLatest,
    profeedback,
  } = props
  const { page } = qs.parse(props.location.search.slice(1))
  const usePage = typeof page === 'string' ? page : '0'
  const [currentPage, setCurrentPage] = useState(parseInt(usePage, 10) || 1)
  const [variables, setVariables] = useState({
    variables: {
      first: 10,
      offset: (currentPage - 1) * 10,
      submissionId,
    },
  })

  const { loading, error, data } = useGetAllNotesQuery(variables)
  const totalCount = data?.allVNotes?.totalCount

  useEffect(() => {
    setVariables({
      variables: {
        first: 10,
        offset: (currentPage - 1) * 10,
        submissionId,
      },
    })
  }, [submissionId])

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setVariables({
      variables: { first: 10, offset: (value - 1) * 10, submissionId },
    })
    props.history.push(
      props.location.pathname + '?' + qs.stringify({ page: value })
    )
    setCurrentPage(value)
  }
  if (loading) return null
  if (error) return <p>Error :(</p>

  const notes = data?.allVNotes?.nodes ?? []

  if (totalCount === 0 && currentProfileHasReplied) {
    return null
  }

  const present = isLatest ? (
    <></>
  ) : (
    <div className='flex content-center flex-col items-center'>
      <img aria-label='Got no notes' src={gotnonotes} />
      <p className='p-4 font-semibold'>
        This submission never recieved any notes :(
      </p>
    </div>
  )

  return (
    <div className='flex-col h-full w-full'>
      {totalCount ? (
        <div>
          {notes.map(x => (
            <Note key={`key_${x.id}`} note={x as VNote} isLatest={isLatest} />
          ))}
          {totalCount > 10 && (
            <div className='flex justify-center mb-4'>
              <Pagination
                count={Math.ceil((totalCount ?? 0) / 10)}
                onChange={handleChange}
                page={currentPage}
              />
            </div>
          )}
        </div>
      ) : profeedback ? null : (
        present
      )}
    </div>
  )
}

export default withRouter(Notes)
