import * as React from 'react'
import TitleComponent from './TitleComponent'

const withTitle = (ChildComponent, title) => props => (
  <>
    <TitleComponent title={title} />
    <ChildComponent {...props} />
  </>
)

export default withTitle
