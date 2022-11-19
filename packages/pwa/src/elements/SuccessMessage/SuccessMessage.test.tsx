import * as React from 'react'
import { render } from '@testing-library/react'
import SuccessMessage from './SuccessMessage'

test('Testing that a penis! will show up', () => {
  const { getByText } = render(<SuccessMessage message='penis!' />)
  getByText('penis!')
})
