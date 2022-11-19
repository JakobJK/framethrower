import * as React from 'react'

import CreateGroup from './CreateGroup'
import GroupSchedule from './GroupSchedule'
import GroupMembers from './GroupMembers'
import Collapsible from '../../elements/Collapsible'
import Button from '../../elements/Button'
import BackspaceIcon from '@material-ui/icons/Backspace'

import {
  useGetAllCompanyAdminGroupsQuery,
  useCompanyDeleteGroupMutation,
  GetAllCompanyAdminGroupsDocument,
} from '../../graphql/generated/hooks'

const Groups = () => {
  const { loading, error, data } = useGetAllCompanyAdminGroupsQuery({
    variables: { offset: 0 },
  })

  const [companyDeleteGroup] = useCompanyDeleteGroupMutation()

  if (loading) return null
  if (error) return <p>Error :(</p>

  const groups = data?.allVCompanyAdminGroups?.nodes ?? []

  const handleDelete = id => {
    companyDeleteGroup({
      refetchQueries: () => [
        { query: GetAllCompanyAdminGroupsDocument, variables: { offset: 0 } },
      ],
      variables: { id },
    }).then(res => {
      res.data
    })
  }

  return (
    <>
      {groups.map(x => {
        return (
          <div className='py-8' key={`key_${x.id}`}>
            <div className='p-4 bg-gray-900 bg-opacity-30'>
              <div className='flex justify-between items-center'>
                <div>
                  <span className='font-semibold text-lg'>{x.groupName}</span>
                  <span className='pl-2'>- {x.totalmembers} Members</span>
                </div>
                <Button onClick={() => handleDelete(x.id)}>
                  <BackspaceIcon />
                </Button>
              </div>
              {x.description && (
                <div className='p-4 text-gray-400'>
                  <p>{x.description}</p>
                </div>
              )}
            </div>
            <Collapsible headline='Members' urlString={`${x.slug}-members`}>
              {x.totalmembers > 0 ? (
                <GroupMembers groupId={x.id} />
              ) : (
                <p className='w-full text-center font-semibold text-gray-500'>
                  This Group has no Members currently
                </p>
              )}
            </Collapsible>
            <Collapsible headline='Schedule' urlString={`${x.slug}-schedule`}>
              <GroupSchedule groupId={x.id} />
            </Collapsible>
          </div>
        )
      })}
      <div className='py-8'>
        <Collapsible headline='Create New Group' urlString='creategroup'>
          <CreateGroup />
        </Collapsible>
      </div>
    </>
  )
}

export default Groups
