import * as React from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { useGetAllSubmissionsQuery } from '../../graphql/generated/hooks'
import { Submission as SubmissionType } from '../../graphql/generated/hooks'
import Submission from './Submission'

const SubmissionSelector = (
  props: RouteComponentProps<{}> & {
    setSubmission: (val: string) => void
    submission: string
    animationId: string
    setOpen: (val: boolean) => void
  }
) => {
  const { setSubmission, submission, animationId, setOpen } = props

  const { loading, error, data } = useGetAllSubmissionsQuery({
    variables: { animationId },
  })

  if (loading) return null
  if (error) return <p>Error :(</p>

  const submissions = data?.allSubmissions?.nodes ?? ([] as SubmissionType[])
  return (
    <div className='w-px m-auto w-50rem bg-gray-800 h-27rem shadow-lg rounded overflow-y-auto'>
      {submissions.map((x, i) => (
        <Submission
          key={`key_${x.id}`}
          setSubmission={setSubmission}
          animationId={animationId}
          subs={x as SubmissionType}
          setOpen={setOpen}
          version={
            0 === i
              ? `${submissions.length - i} (Latest)`
              : `${submissions.length - i}`
          }
        />
      ))}
    </div>
  )
}

export default withRouter(SubmissionSelector)
