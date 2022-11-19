import * as React from 'react'
import { Link } from 'react-router-dom'
import { Headline as HeadlineType } from '../../graphql/generated/types'

const HeadlineItem = (props: { headline: HeadlineType }) => {
  const { thumbnail, title, link } = props.headline

  const content = (
    <div
      className='flex flex-col justify-end h-48 bg-center shadow-2xl rounded overflow-hidden hover:shadow-vignette'
      style={{ backgroundImage: `url("${STORAGE}/${thumbnail}")` }}
    >
      {title && (
        <div
          className='p-4 font-bold text-center'
          style={{
            backgroundImage:
              'linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5), rgba(0,0,0,8))',
          }}
        >
          {title}
        </div>
      )}
    </div>
  )

  // Internal or external link?
  return link.includes('framethrower.io') ? (
    <Link to={link.split('framethrower.io')[1]}>{content}</Link>
  ) : (
    <a target='_blank' href={link}>
      {content}
    </a>
  )
}

export default HeadlineItem
