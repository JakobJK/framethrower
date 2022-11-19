import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import withTitle from '../../context/withTitle'
import qs from 'qs'

import Pagination from '@material-ui/lab/Pagination'
import AnimationPreview from '../../components/AnimationPreview'

import Headline from '../../components/Headline'
import { VAnimationPreview } from '../../graphql/generated/types'
import { useGetAllAnimationQuery } from '../../graphql/generated/hooks'

const { useState, useEffect } = React

const Animations = (props: RouteComponentProps) => {
  const { page } = qs.parse(props.location.search.slice(1))
  const usePage = typeof page === 'string' ? page : '0'
  const [currentPage, setCurrentPage] = useState(parseInt(usePage, 10) || 1)
  const [offset, setOffset] = useState((currentPage - 1) * 24)

  const { loading, error, data } = useGetAllAnimationQuery({
    variables: { offset },
  })

  useEffect(() => {
    const { page } = qs.parse(props.location.search.slice(1))
    const curPage = parseInt(page, 10) || 1
    setCurrentPage(curPage)
    setOffset((curPage - 1) * 24)
  }, [props.location.search])

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setOffset((value - 1) * 24)
    props.history.push(
      props.location.pathname + '?' + qs.stringify({ page: value })
    )
    setCurrentPage(value)
  }

  if (loading) return null
  if (error) return <p>Error :(</p>

  const anims =
    data?.allVAnimationPreviews?.nodes ?? ([] as Array<VAnimationPreview>)

  return (
    <div className='flex justify-center'>
      <div className='w-full max-w-screen-xl'>
        <Headline />
        <div className='grid gap-4 grid-cols-16 p-4'>
          {anims.map(x => (
            <AnimationPreview
              offset={offset}
              key={`key_${x.id}`}
              animPreview={x as VAnimationPreview}
            />
          ))}
        </div>
        <div className='flex justify-center'>
          <Pagination
            count={Math.ceil(
              (data?.allVAnimationPreviews?.totalCount ?? 0) / 24
            )}
            size='large'
            shape='rounded'
            page={currentPage}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  )
}

export default withTitle(Animations, 'Animations')
