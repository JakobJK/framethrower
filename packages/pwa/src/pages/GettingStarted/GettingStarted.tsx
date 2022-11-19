import * as React from 'react'
import { RouteComponentProps, Link } from 'react-router-dom'
const gettingStarted = require('../../static/gettingStarted.png')
import Collapsible from '../../elements/Collapsible'
import InstallPip from './InstallPip'
import Register from './Register'
import Requests from './Requests'
import Codecs from './Codecs'
import ShelfButton from './ShelfButton'
import Platform from './Platform'
import withTitle from '../../context/withTitle'

const { useState, Fragment } = React

const GettingStarted = (props: RouteComponentProps) => {
  const [currentOs, setCurrentOs] = useState('windows')

  return (
    <div className='flex flex-col break-normal justify-center items-center justify-items-center'>
      <div className='w-full mx-0	my-4	max-w-2xl	bg-gray-800 rounded shadow p-8'>
        <div className='flex flex-col w-full justify-center items-center'>
          <h1 className=' text-3xl p-4'>Getting Started</h1>
          <img
            aria-label='Getting started'
            className='self-center p-4'
            src={gettingStarted}
          />
        </div>
        <Platform currentOs={currentOs} setCurrentOs={setCurrentOs} />

        <p className='text-gray-300 w-full py-4 px-10'>
          In all honesty, this will be a few steps - but luckily you can sit
          back and enjoy{' '}
          <Link
            className='hover:underline text-gray-400 hover:text-white'
            to='/post/getting-started-with-juliana-caicedo'
          >
            this video
          </Link>{' '}
          of awesome animator, Juliana Caicedo going through them all for you
          and answering any questions you’d have.
        </p>
        <p className='text-gray-300 w-full py-4 px-10'>
          Also please note that Framethrower requries Autodesk Maya, vers. 2017
          or later.
        </p>
        {[
          {
            state: 'user',
            os: ['windows', 'mac'],
            headline: 'Register and Download the Framethrower Plug In',
            component: <Register currentOs={currentOs} />,
          },
          {
            state: 'pip',
            os: ['windows'],
            headline: 'Install PIP',
            component: <InstallPip currentOs={currentOs} />,
          },
          {
            state: 'requests',
            os: ['windows', 'mac'],
            headline: 'Install Requests',
            component: <Requests currentOs={currentOs} />,
          },
          {
            state: 'codecs',
            os: ['windows'],
            headline: 'Install Codecs',
            component: <Codecs currentOs={currentOs} />,
          },
          {
            state: 'shelf',
            os: ['windows', 'mac'],
            headline: 'Activate your Account',
            component: <ShelfButton />,
          },
        ].map((x, i) => {
          return x.os.includes(currentOs) ? (
            <Fragment key={x.headline}>
              <Collapsible headline={x.headline} urlString={x.state}>
                {x.component}
              </Collapsible>
            </Fragment>
          ) : null
        })}
        {currentOs === 'linux' && (
          <p className='px-32 py-8 leading-normal'>
            Alright, Mr Linux Man. Get out of here. You know what you're doing.
            Just install requests module, and load the plugin after downloading
            it, you're good!
          </p>
        )}
      </div>
    </div>
  )
}

export default withTitle(GettingStarted, 'Getting Started')
