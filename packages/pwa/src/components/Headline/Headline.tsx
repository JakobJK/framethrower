import * as React from 'react'
import { Link } from 'react-router-dom'
import { useGetFrontpageHeadlinesQuery } from '../../graphql/generated/hooks'
import { Headline as HeadlineType } from '../../graphql/generated/types'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
import HeadlineItem from './HeadlineItem'

const Headline = () => {
  const { loading, error, data } = useGetFrontpageHeadlinesQuery()

  if (loading) return null
  if (error) return null

  const headlineItems = data?.allHeadlines?.nodes ?? ([] as Array<HeadlineType>)

  return (
    <div className='flex justify-between items-center'>
      <div className=' w-full grid grid-cols-head grid-rows auto-rows-0 grid-rows-head overflow-y-hidden gap-2'>
        {headlineItems.map(x => (
          <HeadlineItem headline={x as HeadlineType} key={`key_${x.id}`} />
        ))}
      </div>
      <div className=' w-10 text-right opacity-30 hover:opacity-50'>
        <Link to='/archive'>
          <KeyboardArrowRightIcon style={{ transform: 'scale(3)' }} />
        </Link>
      </div>
    </div>
  )
}

export default Headline
