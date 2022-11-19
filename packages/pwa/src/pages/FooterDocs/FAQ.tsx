import * as React from 'react'
import Collapsible from '../../elements/Collapsible'

const UploadThroughMaya = () => {
  return <p>Jake, the Yogi bear looking guy, only knows Maya - Boooh!</p>
}

const SupportOtherSoftware = () => {
  return (
    <p>
      Probably not. We can barely support our selves. At least we're giving Bezo
      some money, so that's cool (AWS server costs)
    </p>
  )
}

const FAQ = () => {
  return (
    <>
      <h1 className='text-lg p-8'>
        <span className='underline font-semibold'>F</span>requently{' '}
        <span className='underline font-semibold'>A</span>sked{' '}
        <span className='underline font-semibold'>Q</span>uestions
      </h1>
      {[
        {
          headline: 'Why can I only upload through Maya?',
          component: <UploadThroughMaya />,
          urlString: 'uploadmaya',
        },
        {
          headline: 'Will you support other 3d software?',
          component: <SupportOtherSoftware />,
          urlString: 'alt',
        },
      ].map(x => (
        <Collapsible size='small' headline={x.headline} urlString={x.urlString}>
          {x.component}
        </Collapsible>
      ))}
    </>
  )
}

export default FAQ
