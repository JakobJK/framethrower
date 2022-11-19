import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import qs from 'qs'
import { useGetAllHeadlinesQuery } from '../../graphql/generated/hooks'
import { Headline as HeadlineType } from '../../graphql/generated/types'
import withTitle from '../../context/withTitle'
const { useState } = React

import HeadlineItem from '../../components/Headline/HeadlineItem'
import Pagination from '@material-ui/lab/Pagination'

const Archive = (props: RouteComponentProps) => {
  const { page } = qs.parse(props.location.search.slice(1))
  const usePage = typeof page === 'string' ? page : '0'
  const [currentPage, setCurrentPage] = useState(parseInt(usePage, 10) || 1)
  const [offset, setOffset] = useState((currentPage - 1) * 42)

  const { loading, error, data } = useGetAllHeadlinesQuery({
    variables: { offset },
  })

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setOffset((value - 1) * 42)
    props.history.push(
      props.location.pathname + '?' + qs.stringify({ page: value })
    )
    setCurrentPage(value)
  }

  if (loading) return null
  if (error) return null

  const headlineItems = data?.allHeadlines?.nodes ?? ([] as Array<HeadlineType>)

  return (
    <>
      <div className=' max-w-screen-xl content-center m-auto'>
        <div className='grid grid-cols-allheads gap-2'>
          {headlineItems.map(x => (
            <HeadlineItem headline={x as HeadlineType} key={`key_${x.id}`} />
          ))}
        </div>
      </div>
      <div className='flex w-full justify-center p-8'>
        <Pagination
          count={Math.ceil((data?.allHeadlines?.totalCount ?? 0) / 24)}
          size='large'
          shape='rounded'
          page={currentPage}
          onChange={handleChange}
        />
      </div>
    </>
  )
}

export default withTitle(Archive, 'Archive')
