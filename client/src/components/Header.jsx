import React from 'react'

export default function Header() {
  return (
    <div className='p-5 bg-primary flex justify-between'>
        {/* <h1 className='text-4xl font-semibold text-secondary'>A</h1>
        <h1 className='text-4xl font-semibold text-white'>L</h1>
        <h1 className='text-4xl font-semibold text-tertiary'>I</h1> */}
        
        <h1 className='text-4xl font-semibold text-white'>Alireza <span className='text-tertiary'>Ghanbari</span></h1>
    </div>
  )
}