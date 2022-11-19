import * as React from 'react'
import SignupForm from './SignupForm'
import Agreement from './Agreement'

const { useState } = React

const Signup = () => {
  const [agreed, setAgreed] = useState(false)

  return agreed ? <SignupForm /> : <Agreement setAgreed={setAgreed} />
}

export default Signup
