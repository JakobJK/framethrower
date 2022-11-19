import React from 'react'
import { Helmet } from 'react-helmet'

const TitleComponent = ({ title }) => {
  const defaultTitle = 'Framethrower'
  return (
    <Helmet>
      <title>{title ? `${title} - Framethrower` : defaultTitle}</title>
    </Helmet>
  )
}

export default TitleComponent
