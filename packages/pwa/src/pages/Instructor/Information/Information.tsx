import * as React from 'react'
import Collapsible from '../../../elements/Collapsible'
import Conduct from './Conduct'
import PaymentProcedure from './PaymentProcedure'
import FeedbackProcedure from './FeedbackProcedure'
const Information = props => {
  return (
    <>
      <Collapsible headline='Conduct' size='small' urlString='conduct'>
        <Conduct />
      </Collapsible>
      <Collapsible
        headline='Contractor Agreement'
        size='small'
        urlString='contract'
      >
        <p>LOOL</p>
      </Collapsible>
      <Collapsible
        headline='Feedback Procedure'
        size='small'
        urlString='feedback'
      >
        <FeedbackProcedure />
      </Collapsible>
      <Collapsible
        headline='Payment Procedure'
        size='small'
        urlString='payment'
      >
        <PaymentProcedure />
      </Collapsible>
    </>
  )
}

export default Information
