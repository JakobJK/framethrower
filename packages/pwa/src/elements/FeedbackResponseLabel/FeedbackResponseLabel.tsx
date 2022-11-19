import * as React from 'react'
import { FeedbackResponseStatus } from '../../graphql/generated/types'

const FeedbackResponseLabel = ({
  FeedbackResponse,
}: {
  FeedbackResponse: FeedbackResponseStatus
}) => {
  const status = {
    PENDING: 'text-green-300',
    UNCLAIMED: 'text-gray-500',
    PROCESSED: 'text-green-500',
    UPLOADING: 'text-yellow-400',
    CONCEDED: 'text-red-600',
  }

  return (
    <span className={`${status[FeedbackResponse]} font-semibold text-sm`}>
      {FeedbackResponse}
    </span>
  )
}

export default FeedbackResponseLabel
