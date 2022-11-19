// import React, { useState } from 'react'
// import Checkbox from '@material-ui/core/Checkbox'
// import Button from '../../elements/Button'
// import WithPermission from '../../context/WithPermission'
// import {
//   useAcceptedAgreementQuery,
//   AcceptedAgreementDocument,
//   useAcceptInstructorAgreementMutation,
// } from '../../graphql/generated/hooks'
// const Invitation = () => {
//   const [accepted, setAccepted] = useState(false)
//   const [submit, setSubmit] = useState(false)

//   const { loading, error, data } = useAcceptedAgreementQuery()
//   const [acceptInstructorAgreement] = useAcceptInstructorAgreementMutation()
//   const agreementAccepted =
//     data?.currentProfile?.instructorByProfileId?.acceptedAgreement

//   const handleSubmit = () => {
//     acceptInstructorAgreement({
//       variables: {},
//       refetchQueries: () => [{ query: AcceptedAgreementDocument }],
//     }).then(response => {
//       console.log(response)
//     })
//   }

//   return (
//     <WithPermission permission='invited' fourohfour>
//       <div className='flex flex-col break-normal justify-center items-center justify-items-center'>
//         <div className='w-full mx-0	my-4	max-w-4xl	bg-gray-800 rounded shadow p-8'>
//           {agreementAccepted || submit ? (
//             <>
//               <h1>Thank you for accepted! We will get in touch shortly!</h1>
//             </>
//           ) : (
//             <>
//               <h3>
//                 What is up in this nutsack! YOU WANNA INSTRUCT?! AGREE AND WE
//                 WILL PAY YOU!
//               </h3>
//               <p>Do you wanna help us? Agree please!</p>
//               <p>
//                 If you are not interested, simply leave this alone, and it will
//                 go away if you haven't reacted to it in a week or two!
//               </p>
//               <Checkbox
//                 checked={accepted}
//                 color='primary'
//                 onChange={e => setAccepted(e.target.checked)}
//               />
//               <br />
//               <Button variant='outlined' onClick={handleSubmit}>
//                 I Agree
//               </Button>
//             </>
//           )}
//         </div>
//       </div>
//     </WithPermission>
//   )
// }

// export default Invitation
