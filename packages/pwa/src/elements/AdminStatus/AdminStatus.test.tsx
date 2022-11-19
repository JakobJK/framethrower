import * as React from 'react'

import { render } from '@testing-library/react'
import AdminStatus from './AdminStatus'

test('Test some shit', () => {
  const { getByText } = render(<AdminStatus role='FRAMETHROWER_ADMIN' />)

  getByText('Admin')
})
