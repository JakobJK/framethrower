import * as React from 'react'
import { useGetAllInstructorsQuery } from '../../graphql/generated/hooks'
import {
  Instructor as InstructorType,
  Profile as ProfileType,
} from '../../graphql/generated/types'
import InstructorPreview from './InstructorPreview'
const Instructors = () => {
  //TODO: We need to add pagination somewhere for the instructors page!
  const { loading, error, data } = useGetAllInstructorsQuery()

  if (loading) return null
  if (error) return <p>Error... :(</p>

  const instructors =
    data?.allInstructors?.nodes ?? ([] as Array<InstructorType>)

  console.log('INSTRUCTORS: ', instructors)

  return (
    <div className='flex flex-col break-normal justify-center items-center justify-items-center'>
      <div className='w-full max-w-4xl'>
        {instructors.map((x, i) => {
          const profile = { ...x.profileByProfileId, banner: x.banner }
          return (
            <InstructorPreview
              instructor={profile as ProfileType}
              key={`inst_${profile?.id}`}
              i={i}
            />
          )
        })}
      </div>
    </div>
  )
}
export default Instructors
