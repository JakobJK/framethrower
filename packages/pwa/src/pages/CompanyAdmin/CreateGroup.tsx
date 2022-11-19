import * as React from 'react'


import Button from '../../elements/Button'
import TextField from '@material-ui/core/TextField'
import { useForm, Controller } from 'react-hook-form'

import {
  useCompanyCreateGroupMutation,
  GetAllCompanyAdminGroupsDocument,
  GetCompanyAdminPageDocument,
} from '../../graphql/generated/hooks'

const { useState } = React

const CreateGroup = () => {
  const { handleSubmit, control, reset } = useForm()
  const [processing, setProcessing] = useState(false)
  const [createGroupMutation] = useCompanyCreateGroupMutation()

  const onSubmit = data => {
    setProcessing(true)
    createGroupMutation({
      refetchQueries: () => [
        { query: GetAllCompanyAdminGroupsDocument, variables: { offset: 0 } },
        { query: GetCompanyAdminPageDocument },
      ],
      variables: {
        name: data.name,
        description: data.description || null,
      },
    })
      .then(res => {
        reset()
        setProcessing(false)
      })
      .catch(e => {
        console.log(e)
      })
  }

  return (
    <div className='w-full px-20'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name='name'
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              defaultValue=''
              label='Group Name'
              required
            />
          )}
        />
        <Controller
          control={control}
          name='description'
          render={({ field }) => (
            <TextField
              {...field}
              defaultValue=''
              fullWidth
              multiline
              rows={5}
              rowsMax={5}
              label='Description'
            />
          )}
        />
        <div className='py-8'>
          <Button type='submit' fullWidth disabled={processing}>
            {processing ? 'Processing...' : 'Create New Group'}
          </Button>
        </div>
      </form>
    </div>
  )
}

export default CreateGroup
