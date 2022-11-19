import * as React from 'react'
import { Route, Link, withRouter } from 'react-router-dom'
import TitleComponent from '../../context/TitleComponent'
import Settings from './Settings'
import Members from './Members'
import Groups from './Groups'
import Welcome from './Welcome'

import { useGetCompanyAdminPageQuery } from '../../graphql/generated/hooks'

const CompanyAdmin = props => {
  const { loading, error, data } = useGetCompanyAdminPageQuery()

  const company = data?.allVCompanyAdmins?.nodes?.[0] ?? {}
  const groups =
    data?.allVCompanyAdmins?.nodes?.[0]?.companyById
      ?.companyProGroupsByCompanyId?.nodes ?? []

  if (loading) return null
  if (error) return null

  const menuItems = [
    {
      url: '/adm',
      display: company.name,
    },
    {
      url: '/adm/members',
      display: 'Members',
    },
    {
      url: '/adm/groups',
      display: 'Groups',
    },
    {
      url: '/adm/settings',
      display: 'Settings',
    },
  ].map(x => (
    <Link to={x.url} key={`id_${x.url}`}>
      <div
        className={`text-center rounded-t rounded-b-none pb-0 pt-4 px-4 hover:underline ${
          props.location.pathname === x.url
            ? 'text-white bg-gray-800'
            : 'text-gray-400 hover:text-white'
        }`}
      >
        {x.display}
      </div>
    </Link>
  ))

  return (
    <div className='flex flex-col break-normal justify-center items-center justify-items-center'>
      <TitleComponent title={company.name} />
      <div className='flex'>{menuItems}</div>
      <div className='w-full mx-0	max-w-4xl	bg-gray-800 rounded p-8'>
        <Route exact path='/adm' render={() => <Welcome company={company} />} />
        <Route
          path='/adm/settings'
          render={() => <Settings company={company} />}
        />
        <Route path='/adm/members' render={() => <Members groups={groups} />} />
        <Route path='/adm/groups' component={Groups} />
      </div>
    </div>
  )
}

export default withRouter(CompanyAdmin)
