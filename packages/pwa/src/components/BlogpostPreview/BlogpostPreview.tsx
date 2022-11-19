import * as React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

import { VPost } from '../../graphql/generated/types'

const BlogpostPreview = ({ blogpostPreview }: { blogpostPreview: VPost }) => {
  const {
    title,
    intro,
    createdAt,
    slug,
    thumbnail,
    proContent,
  } = blogpostPreview
  return (
    <Link className='w-full max-w-3xl my-2' to={`/post/${slug}`}>
      <div className='mx-0 p-0 flex justify-between bg-gray-800 rounded hover:shadow'>
        <div>
          <img className='rounded-l' src={`${STORAGE}/${thumbnail}`} />
        </div>
        <div className='w-full py-2 px-4'>
          <div className='flex flex-col justify-between h-full'>
            <div>
              <div className='flex justify-between'>
                <h1 className='text-lg font-bold'>{title}</h1>
                <div className='text-xs font-light mb-2'>
                  {moment(createdAt).format('MMMM Do YYYY')}
                </div>
              </div>
              <div>{intro}</div>
            </div>
            {proContent && (
              <div className='flex justify-end'>
                <span className='text-blue-400 font-semibold'>PRO</span>
                <span className=' text-white font-semibold'>CONTENT</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogpostPreview
