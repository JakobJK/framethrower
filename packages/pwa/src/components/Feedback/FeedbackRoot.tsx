import * as React from 'react'
import Feedback from './Feedback'

import { useGetFeedbackQuery } from '../../graphql/generated/hooks'

const FeedbackRoot = ({ submissionId }: { submissionId: string }) => {
  const { loading, error, data } = useGetFeedbackQuery({
    variables: { submissionId },
  })

  if (loading) return null
  if (error) return null

  const response = data?.allVFeedbacks?.nodes?.[0]
  return response ? <Feedback response={response} /> : null
}

export default FeedbackRoot
