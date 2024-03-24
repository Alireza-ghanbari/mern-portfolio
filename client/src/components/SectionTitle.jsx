import React from 'react'

export default function SectionTitle({title}) {
  return (
    <div className='flex gap-10 items-center py-10 sm:py-0 sm:gap-6'>
        <h1 className='text-3xl text-white sm:text-2xl'>{title}</h1>
        <div className='w-96 h-[1px] bg-tertiary sm:w-80'>

        </div>
    </div>
  )
}
