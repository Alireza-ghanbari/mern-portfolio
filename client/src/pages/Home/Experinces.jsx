import { useState } from 'react'
import SectionTitle from '../../components/SectionTitle'

export default function Experinces() {
    const [selectedItemIndex, setSelectedItemIndex] = useState(0);
    const experiences=[{
        company: "google",
        title: 'react dev',
        period: '2021-2022',
        description: '',
    },
    {
        company: "tikok",
        title: 'web dev',
        period: '2022-2023',
        description: '',
    },
    {
        company: "apple",
        title: 'backend dev',
        period: '2023-2024',
        description: '',
    }]
  return (
    <div className='sm:mt-12'>
        <SectionTitle title='Experience'/>

        <div className="flex py-10 gap-20 sm:flex-col">
            <div className='flex flex-col gap-5 border-l-2 border-[#135e4c82] w-1/4 sm:flex-row sm:overflow-x-scroll sm:w-full sm:border-none'>
                {experiences.map((experience, index)=>(
                    <div onClick={()=>{
                        setSelectedItemIndex(index)
                    }} className='cursor-pointer'>
                        <h1 className={`text-xl px-5 py-3 sm:w-40 sm:border-none ${selectedItemIndex === index? `text-tertiary border-l-4 -ml-[3px] bg-[#135e4c82] border-tertiary`: `text-white`}`}>
                            {experience.period}
                        </h1>
                    </div>
                ))}
            </div>
                
            <div className='flex flex-col gap-5'>
                <h1 className='text-secondary text-xl'>{experiences[selectedItemIndex].title}</h1>
                <h1 className='text-tertiary text-xl'>{experiences[selectedItemIndex].company}</h1>
                <p className='text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas ullam odit ad delectus? Qui similique, veniam dolorum magnam repellat nam corrupti cumque fuga, error facere deleniti perspiciatis itaque, repellendus pariatur?</p>
            </div>
        </div>
    </div>
  )
}
