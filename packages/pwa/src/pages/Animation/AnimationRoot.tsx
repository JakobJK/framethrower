import React, { useState } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import Animation from './Animation'
const AnimationRoot = (
  props: RouteComponentProps<{ id: string; submission: string }>
) => {
  const { id, submission: submissionId } = props.match.params
  const [submission, setSubmission] = useState(submissionId)

  return (
    <Animation
      animationId={id}
      submission={submission}
      setSubmission={setSubmission}
    />
  )
}

export default AnimationRoot
