import * as React from 'react'

const moreprojects = require('../../static/moreprojects.png')
const profeedback = require('../../static/profeedback.png')
const promembershipwheresignup = require('../../static/promembershipwheresignup.png')

const ProMembership = () => {
  return (
    <>
      <div className='flex flex-col  my-8 break-normal justify-center items-center justify-items-center'>
        {/* <div>
          <h1 className='text-3xl p-2 uppercase font-semibold'>
            <span className='text-blue-400 font-semibold'>pro</span>membership
          </h1>
        </div> */}
        <div className='max-w-4xl w-full p-8 flex justify-around'>
          {[
            {
              title: (
                <>
                  <span className=' opacity-60'>BASIC</span>
                  <span>MEMBERSHIP</span>
                </>
              ),
              options: [
                '250 frames per submissions',
                '5 Concurrent Projects',
                '1 Daily Submissions',
              ],
            },
            {
              title: (
                <>
                  <span className='text-blue-400 '>PRO</span>
                  <span>MEMBERSHIP</span>
                </>
              ),
              options: [
                <>
                  <span className='font-semibold'>750</span>
                  <span> frames per submissions</span>
                </>,
                <>
                  <span className='font-semibold'>15</span>
                  <span> Concurrent Projects</span>
                </>,
                <>
                  <span className='font-semibold'>4</span>
                  <span> Daily Submissions</span>
                </>,
                'Exclusive Content',
                'Personalized Pro Feedback',
                'Access to all Pro Feedback',
              ],
            },
          ].map(x => {
            return (
              <div className='bg-gray-800 rounded-lg shadow-lg w-2/5 p-4'>
                <h2 className='text-center font-semibold p-4 text-xl'>
                  {x.title}
                </h2>
                <div
                  style={{
                    height: '1px',
                    backgroundImage:
                      'linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0))',
                  }}
                />
                <ul className='flex-col flex items-center p-4  text-lg'>
                  {x.options.map(y => {
                    return <li className='p-4'> {y} </li>
                  })}
                </ul>
              </div>
            )
          })}
        </div>
        {[
          {
            title: 'Proffessional Feedback',
            img: profeedback,
            component: (
              <div className='py-4 text-lg'>
                <p className='tracking-wide py-2'>
                  Receive <span className='font-semibold underline'>15</span>{' '}
                  minutes of customized feedback addressing your work every
                  month from our top tier animators, working in the feature,
                  games or visual effects industry!
                </p>

                <p className='tracking-wide  py-2'>
                  And gain full access to{' '}
                  <span className='underline font-semibold'>ALL</span> feedback
                  videos and learn from the feedback addressing others!
                </p>

                <p className='tracking-wide  py-2'>
                  Should you decide to take a break from your pro membership, no
                  need to worry, you'll always have access to feedback
                  addressing your animation.
                </p>
              </div>
            ),
          },

          {
            title: (
              <>
                <span className='text-blue-400 font-semibold'>PRO</span>
                <span className='font-semibold'>MEMBERSHIP</span> Content
              </>
            ),
            img: moreprojects,
            component: (
              <p className='tracking-wide py-4 text-lg'>
                Gain access to exclusive talks, lectures and interviews from
                world class animators and recruiters and gain that inside the
                industry knowledge!
              </p>
            ),
          },
          {
            title: 'Submit Longer scenes more Frequently',
            img: moreprojects,
            component: (
              <p className='p-4 tracking-wide text-lg'>
                Submit <span className='font-semibold underline'>750</span>{' '}
                frames in each submission and up to{' '}
                <span className='font-semibold underline'>4</span> times a day
                as a pro member!
              </p>
            ),
          },
          {
            title: 'More Concurrent Projects',
            img: moreprojects,
            component: (
              <p className='p-4 tracking-wide text-lg'>
                With the{' '}
                <span className='text-blue-400 font-semibold'>PRO</span>
                <span className='font-semibold'>MEMBERSHIP</span>, you'll be
                able to have <span className='font-semibold underline'>15</span>{' '}
                active projects, which are open to feedback from your peers!
              </p>
            ),
          },
          {
            title: 'Great! Where do I sign up?',
            img: promembershipwheresignup,
            component: (
              <p className='p-4 tracking-wide text-lg'>
                We’re working on it!{' '}
                <span className='text-blue-400 font-semibold'>PRO</span>
                <span className='font-semibold'>MEMBERSHIP</span> is under
                development and will soon be ready for opening, keep an eye out
                for further announcements! - If you'd like to get involved with
                early stage testing, reach out to{' '}
                <a
                  className='hover:underline text-gray-400 hover:text-white'
                  href='mailto:jake@framethrower.io'
                >
                  jake@framethrower.io
                </a>
              </p>
            ),
          },
        ].map((x, i) => {
          const even = i % 2 === 0
          return (
            <div
              className={`flex w-full my-6  bg-opacity-50 max-w-4xl rounded ${
                even ? 'flex-row-reverse' : ''
              }`}
            >
              <div
                className={`w-1/2 flex justify-center items-center bg-opacity-25 rounded-${
                  even ? 'r' : 'l'
                }`}
              >
                <img src={x.img} />
              </div>
              <div
                className={`w-1/2 flex justify-center items-center rounded-${
                  even ? 'l' : 'r'
                }`}
              >
                <div className='w-full h-full p-8'>
                  <h1 className='font-semibold text-xl underline'>{x.title}</h1>
                  {x.component}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default ProMembership
