import * as React from 'react'
import qs from 'qs'
import { withRouter } from 'react-router-dom'
const { useState, useEffect } = React

const Collapsible = ({
  collapsed = true,
  size = 'small',
  headline,
  children,
  disabled = false,
  urlString,
  location,
  history,
}) => {
  const parsed = qs.parse(location.search.slice(1))
  const [expand, setExpand] = useState(!collapsed || parsed[urlString] === 't')
  const font = `${size === 'big' ? 'text-lg' : 'text-base'} w-full text-left`

  useEffect(() => {
    const urlState = qs.parse(location.search.slice(1))
    if (expand) {
      urlState[urlString] = 't'
    } else {
      try {
        delete urlState[urlString]
      } catch (e) {
        console.log('Could not delete thing')
      }
    }
    history.replace(location.pathname + '?' + qs.stringify(urlState))
    // TODO: Can we implement a clean up for this mess,
    // But without breaking client side routing? I dunno
  }, [expand])
  // ▼` : `▶
  return (
    <>
      <button
        disabled={disabled}
        onClick={() => setExpand(!expand)}
        className={`p-4 w-full bg-gray-900 ${
          disabled ? 'cursor-default text-gray-500' : ''
        } bg-opacity-25`}
        role='button'
      >
        <div className='flex'>
          <div className='text-gray-400 pr-6 w-12'>{expand ? '▼' : '▶'}</div>
          <div className={font}>
            {disabled ? `${headline} - currently disabled` : headline}
          </div>
        </div>
      </button>
      {expand && (
        <div className='px-8 py-4 flex justify-between'>
          <>{children}</>
        </div>
      )}
    </>
  )
}

export default withRouter(Collapsible)
