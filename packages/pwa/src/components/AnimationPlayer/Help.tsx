import * as React from 'react'

const Help = () => {
  return (
    <div className='relative'>
      <div className='absolute bottom-0 mb-40 bg-gray-800 rounded shadow z-40 p-3 overflow-x-visible w-64'>
        <h2 className='text-lg font-semibold p-2 leading-4'>Help</h2>
        <table className='w-full'>
          {[
            {
              shortcut: 'h',
              description: 'help',
            },
            {
              shortcut: 'space',
              description: 'Play/Pause',
            },
            {
              shortcut: '[',
              description: 'Cap Start to Current Frame',
            },
            {
              shortcut: ']',
              description: 'Cap End to Current Frame',
            },
            {
              shortcut: ',',
              description: 'Previous Frame',
            },
            {
              shortcut: '.',
              description: 'Next Frame',
            },
            {
              shortcut: 'b',
              description: 'Toggle Brush Tool',
            },
            {
              shortcut: 'e',
              description: 'Toggle Eraser Tool',
            },
            {
              shortcut: 'del',
              description: 'Clears Drawing',
            },
            {
              shortcut: 'm',
              description: 'Flips Animation',
            },
          ].map(x => {
            return (
              <tr className='flex justify-between' key={`key_${x.shortcut}`}>
                <td className=' w-1/4'>
                  <span className='flex justify-between'>
                    <span className='opacity-25'>[</span>
                    <span className='font-semibold'>{x.shortcut}</span>
                    <span className='opacity-25'>]</span>
                  </span>
                </td>
                <td className='text-right w-3/4'>{x.description}</td>
              </tr>
            )
          })}
        </table>
      </div>
    </div>
  )
}

export default Help
