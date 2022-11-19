import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { useGetAllPostCommentsQuery } from '../../graphql/generated/hooks'
import { NewsComment as NewsCommentType } from '../../graphql/generated/types'
import { withRouter } from 'react-router-dom'
import Pagination from '@material-ui/lab/Pagination'
import SmallComment from '../../components/SmallComment'
import qs from 'qs'

const { useState, useEffect } = React

interface Props extends RouteComponentProps {
  slug: string
}

const Comments = (props: Props) => {
  const { location, slug, history } = props
  const { page } = qs.parse(location.search.slice(1))
  const usePage = typeof page === 'string' ? page : '0'
  const [currentPage, setCurrentPage] = useState(parseInt(usePage, 10) || 1)

  const [variables, setVariables] = useState({
    offset: currentPage * 10,
    slug,
  })

  const { loading, error, data } = useGetAllPostCommentsQuery({
    variables,
  })

  useEffect(() => {
    setVariables({ slug, offset: (currentPage - 1) * 10 })
  }, [currentPage])

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setVariables({ offset: value * 10, slug })
    history.push(location.pathname + '?' + qs.stringify({ page: value }))
    setCurrentPage(value)
  }

  if (loading) return null
  if (error) return null

  const allComments = data?.newsBySlug?.newsCommentsByNewsId?.nodes ?? []
  const totalCount = data?.newsBySlug?.newsCommentsByNewsId?.totalCount ?? 0

  return totalCount > 0 ? (
    <div>
      {allComments.map(x => (
        <SmallComment key={x.id} comment={x as NewsCommentType} />
      ))}

      <div className='flex justify-around'>
        <Pagination
          count={Math.ceil((totalCount ?? 0) / 10)}
          size='large'
          shape='rounded'
          page={currentPage}
          onChange={handleChange}
        />
      </div>
    </div>
  ) : null
}

export default withRouter(Comments)
