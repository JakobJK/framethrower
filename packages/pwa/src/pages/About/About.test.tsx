import * as React from 'react'

import { render } from '@testing-library/react'
import About from './About'

const routeComponentPropsMock = {
  history: {
    replace: () => {},
  } as any,
  location: {} as any,
  match: {} as any,
}

const MockedAbout = () => {
  return <About {...routeComponentPropsMock} />
}

test('renders main content block', () => {
  const { getByText } = render(<MockedAbout />)
  getByText('About')
})

test('renders the correct content', () => {
  const { getByText } = render(<MockedAbout />)
  getByText('Frequently Asked Questions')
})

test('Render the rules of conduct header', () => {
  const { getByText } = render(<MockedAbout />)
  getByText('Rules of Conduct')
})
