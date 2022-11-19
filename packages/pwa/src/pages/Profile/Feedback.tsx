import * as React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'

const Feedback = ({ title, note, submissionId, animationId, createdAt }) => {
  return (
    <Link to={`/animation/${animationId}/${submissionId}`}>
      <div>
        For: {title} -{moment(createdAt).format('MMMM Do YYYY')}
        <br />
        <p>{note}</p>
      </div>
    </Link>
  )
}

export default Feedback
