import React from 'react'
import {PulseLoader} from 'react-spinners'

export default function Loader() {
  return (
    <div className='h-screen flex items-center justify-center fixed inset-0 bg-primary'>
        <div className='flex gap-5 text-4xl scale-150 sm:scale-100'>
            <PulseLoader/>
        </div>
    </div>
  )
}
