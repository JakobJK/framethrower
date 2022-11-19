import * as React from 'react'
import FtAvatar from '../../elements/FtAvatar'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import {
  useGetAllCompanyAdminMembersQuery,
  useCompanyAdminAddPremiumToGroupMutation,
  GetAllCompanyAdminMembersDocument,
  GetAllCompanyAdminGroupsDocument,
} from '../../graphql/generated/hooks'

const Members = ({ groups }) => {
  const [addPremiumToGroup] = useCompanyAdminAddPremiumToGroupMutation()
  const { loading, error, data } = useGetAllCompanyAdminMembersQuery({
    variables: {
      offset: 0,
    },
  })

  if (loading) return null
  if (error) return null

  const members = data?.allVCompanyAdminMembers?.nodes ?? []

  const handleChange = (groupId, premiumId) => {
    if (!premiumId) return
    addPremiumToGroup({
      refetchQueries: () => [
        { query: GetAllCompanyAdminGroupsDocument, variables: { offset: 0 } },
        {
          query: GetAllCompanyAdminMembersDocument,
          variables: {
            offset: 0,
          },
        },
      ],
      variables: {
        groupId,
        premiumId,
      },
    })
  }

  return (
    <table className='w-full'>
      <thead>
        <tr>
          <th></th>
          <th className='text-right'>Username</th>
          <th className='text-right'>Name</th>
          <th className='text-right'>Group</th>
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
                <Select
                  value={x.groupId || 'no-group'}
                  onChange={e => handleChange(e.target.value, x.premiumId)}
                >
                  <MenuItem value='no-group'>
                    <span className='opacity-25'>No Group</span>
                  </MenuItem>
                  {groups.map(x => (
                    <MenuItem value={x.id} key={x.id}>
                      {x.groupName}
                    </MenuItem>
                  ))}
                </Select>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default Members
