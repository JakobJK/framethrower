import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import withTitle from '../../context/withTitle'
import Readlayout from '../../elements/Readlayout'

const About = (props: RouteComponentProps) => {
  return (
    <Readlayout>
      <h1 className='text-lg p-8'>About</h1>
      <p className='px-8 py-2'>
        Framethrower is an open platform for artists and creatives to support
        and elevate each other, as they work, in that crucial space between idea
        and finished piece.
      </p>
      <p className='px-8 py-2'>
        By sharing what we learn, as we grow, we hone our abilities to mentor
        and lead others, and this grow-and-give dynamic is what’s at the core of
        Framethrower; your creative community brought together to support and
        inspire you and the opportunity for you to do the same in return.
      </p>
    </Readlayout>
  )
}

export default withTitle(About, 'About')
