import * as React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '../../elements/Button'
const { useState } = React

const PluginSettings = () => {
  const [path, setPath] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()
    await fetch(`${SERVERLESS}/download_plugin`, {
      method: 'post',
      body: JSON.stringify({ path }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token'),
      },
    })
      .then(e => {
        if (!e.ok) {
          setError('There was an issue downloading the plug')
          throw new Error('That did not work!')
        }
        return e.blob()
      })
      .then(data => {
        const dlObject = URL.createObjectURL(data)
        const link = document.createElement('a')
        link.href = dlObject
        link.download = 'framethrower_UI.py'
        link.click()
      })
      .catch(e => {
        setError('There was an issue downloading the plug')
      })
  }

  return (
    <>
      <div className='bg-red-700 font-semibold text-white p-8 text-center rounded mb-8'>
        Do not share the plugin downloaded here with{' '}
        <span className='underline italic'>anyone</span>. The plugin you
        download here will be linked to your account. Anyone in the possession
        of the plugin downloaded with your account can submit animations as your
        account. You can reset your key, and redownload the plugin, which will
        render all previous downloads of the plugin unusuable.
      </div>
      <div className='w-1/2 mx-auto'>
        <h3 className='text-lg px-4 py-2'>Framethrower Plugin</h3>
        <form onSubmit={handleSubmit}>
          <div className='p-4'>
            Please provide a Cache folder. This is an{' '}
            <span className='italic font-semibold underline'>existing</span>{' '}
            folder on your personal computer, where the framethrower plugin will
            save playblasts.
          </div>
          <div className='p-4'>An example could be: "C:\mycache"</div>
          <div className='p-4'>
            <TextField
              variant='outlined'
              label='Cache Directory'
              type='text'
              fullWidth
              onChange={e => {
                setPath(e.target.value)
              }}
              value={path}
            />
          </div>
          <div className='p-4'>
            <p>
              After download move the file to your maya default script folder,
              typically located at:
            </p>
            <p className='bg-opacity-25 bg-gray-900 p-1 my-2 runded'>
              C:\Users\Username\Documents\maya\2020\prefs\scripts
            </p>
          </div>
          <div className='p-4'>
            <Button
              fullWidth
              type='Submit'
              variant='outlined'
              disabled={Boolean(error)}
            >
              Download The Maya Plugin
            </Button>

            {error && (
              <p className='bg-red-700 text-white p-2 text-center rounded mt-4'>
                There was an issue trying to download the plugin
              </p>
            )}
          </div>
        </form>
      </div>
    </>
  )
}

export default PluginSettings
