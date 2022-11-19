import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { useGetProViewQuery } from '../../graphql/generated/hooks'
import WithPermission from '../../context/WithPermission'
import Feedback from './Feedback'
import Collapsible from '../../elements/Collapsible'
import Readlayout from '../../elements/Readlayout'
import Membership from './Membership'
import Schedule from './Schedule'
import withTitle from '../../context/withTitle'

const Pro = (
  props: RouteComponentProps<{}, any, { justJoined: boolean } | any>
) => {
  const { loading, error, data } = useGetProViewQuery()

  if (error) return <p>Error... :(</p>
  if (loading) return null

  const membership = data?.allVProMemberships?.nodes?.[0] ?? null
  const groupMonths =
    membership?.companyProGroupByCompanyProGroupId?.companyGroupMonthsByGroupId
      ?.nodes ?? []

  const head = (
    <div className='w-full flex justify-between'>
      <div className=' font-bold'>
        <span>PRO</span>
        <span className='text-blue-400'>MEMBERSHIP</span>
      </div>
      <div>
        {membership?.logo ? (
          <img src={`${STORAGE}/${membership.logo}`} />
        ) : (
          <p className='opacity-25 text-sm'>
            * {membership?.companyName} Admin should update Logo
          </p>
        )}
      </div>
    </div>
  )

  return membership ? (
    <WithPermission permission='pro' fourohfour>
      <Readlayout>
        <Collapsible headline={head} urlString='member'>
          <Membership {...membership} />
        </Collapsible>
        <Collapsible headline='Schedule' urlString='schedule'>
          <Schedule groupMonths={groupMonths} />
        </Collapsible>
        <Collapsible headline='Feedback' urlString='feedback'>
          <Feedback />
        </Collapsible>
      </Readlayout>
    </WithPermission>
  ) : null
}

export default withTitle(Pro, 'Pro')
