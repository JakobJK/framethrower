import * as React from 'react'
import { Link, withRouter, Route } from 'react-router-dom'
import withTitle from '../../context/withTitle'

import Pool from './Pool'
import Submit from './Submit'
import Feedback from './Feedback'
import Information from './Information'
import Settings from './Settings'

const Instructor = props => {
  const lists = [
    {
      url: '/instructor',
      display: <span className='font-semibold'>Pool</span>,
    },
    {
      url: '/instructor/response',
      display: 'Submit Feedback',
    },
    {
      url: '/instructor/feedback',
      display: 'All Your Feedback',
    },
    {
      url: '/instructor/settings',
      display: 'Settings',
    },
    {
      url: '/instructor/information',
      display: 'Information',
    },
  ]

  const menuItems = lists.map(x => {
    return (
      <Link to={x.url} key={`id_${x.url}`}>
        {props.location.pathname === x.url ? (
          <div className='text-center bg-gray-800 rounded-t rounded-b-none pb-0 pt-4 pl-4 pr-4 hover:underline text-white'>
            {x.display}
          </div>
        ) : (
          <div className='text-center rounded-t rounded-b-none pb-0 pt-4 pl-4 pr-4 hover:underline text-gray-400 hover:text-white'>
            {x.display}
          </div>
        )}
      </Link>
    )
  })
  return (
    <>
      <div className='flex flex-col break-normal justify-center items-center justify-items-center'>
        <div className='flex'>{menuItems}</div>
        <div className='w-full mx-0	max-w-4xl	bg-gray-800 rounded p-8'>
          <Route path='/instructor' exact={true} component={Pool} />
          <Route path='/instructor/feedback' component={Feedback} />
          <Route path='/instructor/information' component={Information} />
          <Route path='/instructor/settings' component={Settings} />
        </div>
      </div>
      <Route path='/instructor/response' component={Submit} />
    </>
  )
}

export default withRouter(withTitle(Instructor, 'Instructor'))
