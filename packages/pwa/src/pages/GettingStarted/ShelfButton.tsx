import * as React from 'react'

const ShelfButton = () => {
  return (
    <div>
      <h3 className='text-lg px-4 py-2'>Creating a shelf button in Maya</h3>
      <p className='py-4 px-4'>
        To submit your first piece of animation and activate your account open
        the Framethrower submission tool by executing the following python
        script in your Maya script editor: (and to create a shelf button, middle
        mouse + drag the script from your python script editor to your preferred
        shelf.)
      </p>
      <div className='bg-gray-900 bg-opacity-25 px-4 py-2'>
        import framethrower_UI
        <br />
        reload(framethrower_UI)
        <br />
        framethrower_UI.framethrower.show_UI()
        <br />
      </div>
      <p className='p-4'>
        And that’s it! You did it! Well done, we’re excited to have you onboard!
      </p>
      <p className='px-4 py-2 font-semibold'>
        Alright, you can now use Framethrower! It's time to dust off those half finished projects that have been sitting too long on your hard drive and show the rest of the community!
      </p>
    </div>
  )
}

export default ShelfButton
