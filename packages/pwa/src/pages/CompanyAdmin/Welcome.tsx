import * as React from 'react'
import moment from 'moment'

const Welcome = ({ company }) => {
  return (
    <>
      <div className='flex justify-between pt-8 px-8'>
        <h1 className='text-xl font-semibold'>{company.name}</h1>
        <a href={company.link} target='_blank'>
          {company.logo ? (
            <img src={`${STORAGE}/${company.logo}`} width='200' height='auto' />
          ) : (
            <p className='bg-gray-900 opacity-50 rounded shadow p-4'>
              Please upload the {company.name} Logo
            </p>
          )}
        </a>
      </div>
      <div className='text-lg text-center p-24 text-gray-400'>
        <p>
          <span className='text-gray-200 font-semibold'>{company.name}</span>{' '}
          has{' '}
          <span className='font-semibold text-xl text-indigo-200'>
            {company.members}
          </span>{' '}
          <span className='text-gray-200 font-semibold'>
            Member{company.members === '1' ? '' : 's'}
          </span>{' '}
          across{' '}
          <span className='font-semibold text-xl text-indigo-200'>
            {company.groups}
          </span>{' '}
          <span className='text-gray-200 font-semibold'>
            Group{company.groups === '1' ? '' : 's'}
          </span>
        </p>
      </div>
      <div className='text-gray-500'>
        {company.name} has been a partnered with Framethrower since{' '}
        {moment(company.createdAt).format('MMMM YYYY')}
      </div>
    </>
  )
}

export default Welcome
