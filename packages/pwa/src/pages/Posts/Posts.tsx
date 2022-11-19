import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import * as qs from 'qs'
import BlogpostPreview from '../../components/BlogpostPreview'
import { News as NewsType } from '../../graphql/generated/types'
import { useGetAllNewsQuery } from '../../graphql/generated/hooks'
import Pagination from '@material-ui/lab/Pagination'
import withTitle from '../../context/withTitle'

const { useState } = React

const Posts = (props: RouteComponentProps) => {
  const { page } = qs.parse(props.location.search.slice(1))
  const usePage = typeof page === 'string' ? page : '0'
  const [currentPage, setCurrentPage] = useState(parseInt(usePage, 10) || 1)
  const [variables, setVariables] = useState<{ offset: number }>({
    offset: (currentPage - 1) * 10,
  })
  const { loading, error, data } = useGetAllNewsQuery({ variables })

  const handleChange = (event: React.ChangeEvent<unknown>, page: number) => {
    setVariables({ offset: (page - 1) * 10 })
    props.history.push(props.location.pathname + '?' + qs.stringify({ page }))
    setCurrentPage(page)
  }

  if (loading) return null
  if (error) return <p>Error :(</p>

  const posts = data?.allVPosts?.nodes ?? ([] as Array<NewsType>)

  const totalPages = Math.ceil((data?.allVPosts?.totalCount ?? 0) / 10)
  const blogPosts = posts.map(x => (
    <BlogpostPreview blogpostPreview={x as NewsType} key={x.id} />
  ))
  return (
    <div className='flex flex-col break-normal justify-center items-center justify-items-center'>
      {blogPosts}
      <div className='flex justify-center w-full p-4'>
        <Pagination
          count={totalPages}
          size='large'
          shape='rounded'
          page={currentPage}
          onChange={handleChange}
        />
      </div>
    </div>
  )
}

export default withTitle(Posts, 'Get Psyched!')
