import * as React from 'react'

import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'

import {
  useInstructorUpdateAvailabilityMutation,
  GetAllVInstructorSettingsDocument,
} from '../../../graphql/generated/hooks'

const { useState } = React
const ChanceAvailability = ({ status }) => {
  const [processing, setProcessing] = useState(false)

  const [updateAvailability] = useInstructorUpdateAvailabilityMutation()

  const handleAvailabilityChange = (
    event: React.ChangeEvent<{ name?: string; value: unknown }>,
    child: React.ReactNode
  ) => {
    setProcessing(true)
    updateAvailability({
      variables: {
        availability: event.target.value,
      },
      refetchQueries: () => [{ query: GetAllVInstructorSettingsDocument }],
    })
      .then(res => {
        setProcessing(false)
      })
      .catch(e => {
        console.error('Error: ', e)
      })
  }

  const statusElements = [
    {
      name: 'Available',
      display: <FiberManualRecordIcon className=' text-green-600' />,
    },
    {
      name: 'Busy',
      display: <FiberManualRecordIcon className='text-yellow-600' />,
    },
    {
      name: 'Unavailable',
      display: <FiberManualRecordIcon className=' text-red-600' />,
    },
  ].map(x => {
    return (
      <MenuItem
        disabled={processing}
        value={x.name.toUpperCase()}
        key={`key_${x.name}`}
      >
        <div className='w-full flex justify-between'>
          <span>{x.display}</span>
          <span>{x.name}</span>
        </div>
      </MenuItem>
    )
  })

  return (
    <div className='py-4 px-24 w-full'>
      <table className='w-full m-4'>
        <tr>
          <td className='tracking-wide font-semibold text-right pr-4'>
            Availability
          </td>
          <td className='text-right'>
            <Select
              onChange={handleAvailabilityChange}
              className='w-full'
              value={status}
            >
              {statusElements}
            </Select>
          </td>
        </tr>
        <tr>
          <td className='tracking-wide font-semibold text-right pr-4'>
            Status
          </td>
          <td className='text-right'>
            <Select
              className='w-full'
              defaultValue='unpublished'
              disabled={true}
            >
              <MenuItem value='unpublished'>unpublished</MenuItem>
            </Select>
          </td>
        </tr>
      </table>
    </div>
  )
}

export default ChanceAvailability
