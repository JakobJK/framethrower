import * as React from 'react'
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
const Discord = require('../../static/discord.svg')
const Logo = require('../../static/logo.svg')
import WithPermission from '../../context/WithPermission'
import { TokenContext } from '../../context/Role'
import UserMenu from './UserMenu'
import { withRouter } from 'react-router-dom'

const { useContext } = React

const Nav = ({ location: { pathname } }) => {
  const { adminCompany } = useContext(TokenContext)

  return (
    <div className={pathname.startsWith('/animation/') ? 'mb-5' : 'mb-20'}>
      <AppBar
        position={pathname.startsWith('/animation/') ? 'static' : 'fixed'}
        color='secondary'
      >
        <Toolbar>
          <table className='table-auto w-full'>
            <tbody>
              <tr>
                <td className=' w-56'>
                  <Link to='/'>
                    <img
                      arial-label='Framethrower Logo'
                      src={Logo}
                      className='w-full h-auto'
                    />
                  </Link>
                </td>
                <td className='overflow-y-hidden'>
                  <div className='mx-auto'>
                    <ul className='mx-auto flex overflow-hidden justify-center'>
                      <li className='px-1 inline-block'>
                        <Link to='/'>
                          <div className='relative'>
                            <div className='uppercase box-border font-medium items-center align-middle leading-7 tracking-wide text-xs px-2 rounded hover:bg-gray-700 hover:bg-opacity-50 whitespace-no-wrap overflow-hidden'>
                              Animations
                            </div>
                            {(pathname === '/' ||
                              pathname.startsWith('/animation')) && (
                              <div
                                className='absolute w-full bg-blue-400 bottom-0 rounded-full'
                                style={{ height: '0.125rem' }}
                              />
                            )}
                          </div>
                        </Link>
                      </li>
                      <li className='px-1'>
                        <Link to='/posts'>
                          <div className='relative'>
                            <div className='uppercase box-border font-medium items-center align-middle leading-7 tracking-wide text-xs px-2 rounded hover:bg-gray-700 hover:bg-opacity-50 whitespace-no-wrap overflow-hidden'>
                              Get Psyched!
                            </div>
                            {pathname.startsWith('/post') && (
                              <div
                                className='absolute w-full bg-blue-400 bottom-0 rounded-full'
                                style={{ height: '0.125rem' }}
                              />
                            )}
                          </div>
                        </Link>
                      </li>
                      <li className='px-1'>
                        <Link to='/gettingstarted'>
                          <div className='relative'>
                            <div className='uppercase box-border font-medium items-center align-middle leading-7 tracking-wide text-xs px-2 rounded hover:bg-gray-700 hover:bg-opacity-50 whitespace-no-wrap overflow-hidden'>
                              Getting Started
                            </div>
                            {pathname.startsWith('/gettingstarted') && (
                              <div
                                className='absolute w-full bg-blue-400 bottom-0 rounded-full'
                                style={{ height: '0.125rem' }}
                              />
                            )}
                          </div>
                        </Link>
                      </li>
                      <li className='px-1'>
                        <Link to='/discord'>
                          <div className='hover:bg-gray-700 hover:bg-opacity-50 relative h-full w-full whitespace-no-wrap  align-middle flex flex-col justify-center rounded overflow-hidden'>
                            <span>
                              <img
                                arial-label='Discord'
                                src={Discord}
                                width='15'
                                height='15'
                                className='inline-block ml-2'
                              />
                              <span className='mx-2 text-xs uppercase font-medium whitespace-no-wrap'>
                                join the chat!
                              </span>
                            </span>
                            {pathname.startsWith('/discord') && (
                              <div
                                className='absolute w-full bg-blue-400 bottom-0 rounded-full'
                                style={{ height: '0.125rem' }}
                              />
                            )}
                          </div>
                        </Link>
                      </li>
                      <WithPermission permission='admin'>
                        <li className='px-1'>
                          <Link to='/admin'>
                            <div className='relative'>
                              <div className='uppercase box-border font-medium items-center align-middle leading-7 tracking-wide text-xs px-2 rounded hover:bg-gray-700 hover:bg-opacity-50 whitespace-no-wrap overflow-hidden'>
                                Admin
                              </div>

                              {pathname.startsWith('/admin') && (
                                <div
                                  className='absolute w-full bg-blue-400 bottom-0 rounded-full'
                                  style={{ height: '0.125rem' }}
                                />
                              )}
                            </div>
                          </Link>
                        </li>
                      </WithPermission>
                      {adminCompany && (
                        <li className='px-1'>
                          <Link to={`/adm`}>
                            <div className='relative'>
                              <div className='uppercase box-border font-medium items-center align-middle leading-7 tracking-wide text-xs px-2 rounded hover:bg-gray-700 hover:bg-opacity-50 whitespace-no-wrap overflow-hidden'>
                                <span className='whitespace-no-wrap'>
                                  {adminCompany}
                                </span>
                              </div>

                              {pathname.startsWith('/adm') &&
                                !pathname.startsWith('/admi') && (
                                  <div
                                    className='absolute w-full bg-blue-400 bottom-0 rounded-full'
                                    style={{ height: '0.125rem' }}
                                  />
                                )}
                            </div>
                          </Link>
                        </li>
                      )}
                      <WithPermission permission='instructor'>
                        <li className='px-1'>
                          <Link to='/instructor'>
                            <div className='relative'>
                              <div className='uppercase box-border font-medium items-center align-middle leading-7 tracking-wide text-xs px-2 rounded hover:bg-gray-700 hover:bg-opacity-50 whitespace-no-wrap overflow-hidden'>
                                <span className='text-orange-400 whitespace-no-wrap'>
                                  Instructor
                                </span>
                              </div>
                              {pathname.startsWith('/instructor') && (
                                <div
                                  className='absolute w-full bg-orange-400 bottom-0 rounded-full'
                                  style={{ height: '0.125rem' }}
                                />
                              )}
                            </div>
                          </Link>
                        </li>
                      </WithPermission>
                      <WithPermission permission='pro'>
                        <li className='px-1'>
                          <Link to='/pro'>
                            <div className='relative'>
                              <div className='uppercase box-border font-medium items-center align-middle leading-7 tracking-wide text-xs rounded hover:bg-gray-700 px-2 hover:bg-opacity-50 whitespace-no-wrap overflow-hidden'>
                                <span className='text-blue-400'>pro</span>
                              </div>
                              {pathname.startsWith('/pro') &&
                                !pathname.startsWith('/profile/') && (
                                  <div
                                    className='absolute w-full bg-blue-400 bottom-0 rounded-full'
                                    style={{ height: '0.125rem' }}
                                  />
                                )}
                            </div>
                          </Link>
                        </li>
                      </WithPermission>
                    </ul>
                  </div>
                </td>
                <td className='text-right w-1/12'>
                  <div className='inline-block'>
                    <UserMenu />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </Toolbar>
      </AppBar>
    </div>
  )
}
export default withRouter(Nav)
