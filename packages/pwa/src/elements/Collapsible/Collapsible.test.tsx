import * as React from 'react'

import userEvent from '@testing-library/user-event'
import { render } from '@testing-library/react'

import Collapsible from './Collapsible'

const MockedCollapsible = () => {
  return (
    <Collapsible headline='What about this one?'>
      <p>This is fantastic!</p>
    </Collapsible>
  )
}

const CollapsedCollapsible = () => {
  return (
    <Collapsible headline='What about this one?' collapsed={false}>
      <p>This is fantastic!</p>
    </Collapsible>
  )
}

const DisabledCollapsible = () => {
  return (
    <Collapsible
      headline='What about this one?'
      disabled={true}
      collapsed={false}
    >
      <p>This is fantastic!</p>
    </Collapsible>
  )
}

test('Tests the headline renders properly ', () => {
  const { getByText } = render(<MockedCollapsible />)
  const div = getByText('What about this one?')
  userEvent.click(div)
  getByText('This is fantastic!')
})

test('Tests that the children a being rendered after clicking the headline', () => {
  const { getByText } = render(<MockedCollapsible />)
  const div = getByText('What about this one?')
  userEvent.click(div)
  getByText('This is fantastic!')
})

test('Test that the children are already visible if collapsed is false', () => {
  const { getByText } = render(<CollapsedCollapsible />)
  getByText('This is fantastic!')
})

test('Test displaying proper text of diabled collapsibles', () => {
  const { getByText } = render(<DisabledCollapsible />)
  getByText('What about this one? - currently disabled')
})

test('You can disable the collapsbility', () => {
  const { getByText } = render(<DisabledCollapsible />)
  const div = getByText('What about this one? - currently disabled')
  userEvent.click(div)
  getByText('This is fantastic!')
})
