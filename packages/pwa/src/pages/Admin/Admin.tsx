import React, { useState } from 'react'
import { Link, withRouter, Route, RouteComponentProps } from 'react-router-dom'
import NewPost from './NewPost'
import Welcome from './Welcome'
import Members from './Members'
import Companies from './Companies'
import Company from './Company'
import Instructors from './Instructors'
import Instructor from './Instructor'
import Member from './Member'
import FeedbackOverview from './FeedbackOverview'
import NewHeadline from './NewHeadline'
import { ListItem } from './interfaces'

const Admin = (props: RouteComponentProps) => {
  const [list, setList] = useState([
    {
      url: '/admin',
      display: 'Admin',
      page: 'admin',
    },
    {
      url: '/admin/new-post',
      display: 'Create Post',
      page: 'admin',
    },
    {
      url: '/admin/new-headline',
      display: 'Create Headline',
      page: 'headline',
    },
    {
      url: '/admin/members',
      display: 'Members',
      page: 'members',
    },
    {
      url: null,
      display: null,
      page: 'member',
    },
    {
      url: '/admin/instructors',
      display: 'Instructors',
      page: 'instructors',
    },
    {
      url: null,
      display: null,
      page: 'instructor',
    },
    {
      url: '/admin/companies',
      display: 'Companies',
      page: 'companies',
    },
    {
      url: null,
      display: null,
      page: 'company',
    },
    {
      url: '/admin/feedbackoverview',
      display: 'Feedback Overview',
      page: 'feedbackoverview',
    },
  ])

  const menuItems = list.map(x => {
    return x.url ? (
      <Link to={x.url} key={`id_${x.url}`}>
        <div
          className={`text-center rounded-t rounded-b-none px-2 pb-0 pt-4 hover:underline ${
            props.location.pathname === x.url
              ? 'text-white bg-gray-800'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          {x.display}
        </div>
      </Link>
    ) : null
  })

  return (
    <div className='flex flex-col break-normal justify-center items-center justify-items-center'>
      <div className='flex mx-auto'>{menuItems}</div>
      <div className='w-full mx-0	max-w-4xl	bg-gray-800 rounded p-8'>
        <div className='p-4'>
          <Route path='/admin' exact={true} component={Welcome} />
          <Route path='/admin/new-post' component={NewPost} />
          <Route path='/admin/new-headline' component={NewHeadline} />
          <Route path='/admin/members' component={Members} />
          <Route path='/admin/instructors' component={Instructors} />
          <Route path='/admin/feedbackoverview' component={FeedbackOverview} />
          <Route path='/admin/companies' component={Companies} />
          <Route
            path='/admin/instructor/:username'
            render={({ match }) => (
              <Instructor
                username={match.params.username}
                list={list as ListItem[]}
                setList={setList}
              />
            )}
          />
          <Route
            path='/admin/company/:company'
            render={({ match }) => (
              <Company
                company={match.params.company}
                list={list as ListItem[]}
                setList={setList}
              />
            )}
          />
          <Route
            path='/admin/member/:username'
            render={({ match }) => (
              <Member
                username={match.params.username}
                list={list as ListItem[]}
                setList={setList}
              />
            )}
          />
        </div>
      </div>
    </div>
  )
}

export default withRouter(Admin)
