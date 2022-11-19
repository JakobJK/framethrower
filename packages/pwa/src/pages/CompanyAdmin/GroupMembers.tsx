import * as React from 'react'

import {
  useGetCompanyAdminMembersQuery,
  GetCompanyAdminMembersDocument,
  GetAllCompanyAdminGroupsDocument,
  GetAllCompanyAdminMembersDocument,
  useCompanyAdminRemovePremiumFromGroupMutation,
} from '../../graphql/generated/hooks'
import Button from '../../elements/Button'
import ClearIcon from '@material-ui/icons/Clear'
import FtAvatar from '../../elements/FtAvatar'

const GroupMembers = ({ groupId }) => {
  const { loading, error, data } = useGetCompanyAdminMembersQuery({
    variables: {
      offset: 0,
      groupId,
    },
  })

  const [removeFromGroup] = useCompanyAdminRemovePremiumFromGroupMutation()

  if (loading) return null
  if (error) return null

  const members = data?.allVCompanyAdminMembers?.nodes ?? []
  const totalCount = data?.allVCompanyAdminMembers?.totalCount ?? 0

  const handleDelete = premiumId => {
    removeFromGroup({
      refetchQueries: () => {
        return [
          { query: GetAllCompanyAdminGroupsDocument, variables: { offset: 0 } },
          {
            query: GetAllCompanyAdminMembersDocument,
            variables: { offset: 0 },
          },
          {
            query: GetCompanyAdminMembersDocument,
            variables: { offset: 0, groupId: groupId },
          },
        ]
      },
      variables: {
        premiumId,
      },
    })
  }

  return members.length > 0 ? (
    <table className='w-full'>
      <thead>
        <tr>
          <th></th>
          <th className='text-right'>Username</th>
          <th className='text-right'>Name</th>
          <th className='text-right'>Remove</th>
        </tr>
      </thead>
      <tbody>
        {members.map(x => {
          return (
            <tr key={`key_${x.username}`}>
              <td>
                <FtAvatar src={x?.avatar || ''} />
              </td>
              <td className='text-right'>{x.username}</td>
              <td className='text-right'>
                {x.firstname} {x.lastname}
              </td>
              <td className='text-right'>
                <Button
                  onClick={() => {
                    handleDelete(x.premiumId)
                  }}
                >
                  <ClearIcon />
                </Button>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  ) : (
    <p className='w-full text-center font-semibold text-gray-500'>
      This Group has no Members currently
    </p>
  )
}
export default GroupMembers
