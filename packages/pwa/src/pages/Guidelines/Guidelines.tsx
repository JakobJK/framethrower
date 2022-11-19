import * as React from 'react'
import Readlayout from '../../elements/Readlayout'
import withTitle from '../../context/withTitle'

const Guidelines = () => {
  return (
    <Readlayout>
      <h1 className='text-lg p-8'>Community Guidelines</h1>
      <p className='py-2 px-8'>
        Please be respectful of your fellow animator. Personal attacks or
        retaliations and derogatory behavior such as racist or sexist posts or
        comments will not be tolerated
      </p>
      <p className='py-2 px-8'>
        We will not tolerate images, links or information regarding or leading
        to explicit materials, please note that animators come in almost all
        ages from all walks of life, and avoid posting or submitting extreme
        violent, highly sexual or otherwise highly offensive content.
      </p>
      <p className='py-2 px-8'>
        Likewise do not post any images, information or material of any kind
        protected by copyright. We aim to support the animators and the
        animation industry, not undermine it.
      </p>
      <p className='py-2 px-8'>
        Please refrain from spamming and keep comments on topic. This community
        is about the members and their work on the site, it does not serve as a
        platform for alternative agendas or discussions.
      </p>
      <p className='py-2 px-8'>
        At Framethrower we aim to be an open, supportive and helpful community
        for animators, and while we welcome any criticism our members may have,
        we will want to ensure that all members have an equally beneficial and
        positive experience.
      </p>
    </Readlayout>
  )
}

export default withTitle(Guidelines, 'Community Guidelines')
