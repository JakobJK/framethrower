import React, { useState } from 'react'
import SubmissionsList from './SubmissionsList'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import Button from '../../elements/Button'

const SubmissionSelector = ({
  setSubmission,
  submission,
  animationId,
}: {
  setSubmission: (val: string) => void
  submission: string
  animationId: string
}) => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button
        className='z-50'
        id='versionSelect'
        onClick={() => setOpen(!open)}
        variant='outlined'
        size='small'
        onMouseDown={e => e.preventDefault()}
      >
        Versions
      </Button>
      {open && (
        <ClickAwayListener
          onClickAway={() => {
            setOpen(false)
          }}
        >
          <div className='absolute z-50 left-auto mt-16'>
            <SubmissionsList
              setSubmission={setSubmission}
              submission={submission}
              animationId={animationId}
              setOpen={setOpen}
            />
          </div>
        </ClickAwayListener>
      )}
    </>
  )
}

export default SubmissionSelector
