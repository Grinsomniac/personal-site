import React from 'react'
import WorkItem1 from './WorkItem'

const data = [ 
    {
        year: 2021,
        title: 'Software Developer',
        duration: '6 months',
        details: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis eum, laborum ab praesentium quibusdam eveniet culpa consequatur tempora accusamus quis.'
    },
    {
        year: 2021,
        title: 'Software Developer',
        duration: '6 months',
        details: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis eum, laborum ab praesentium quibusdam eveniet culpa consequatur tempora accusamus quis.'
    },
    {
        year: 2021,
        title: 'Software Developer',
        duration: '6 months',
        details: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis eum, laborum ab praesentium quibusdam eveniet culpa consequatur tempora accusamus quis.'
    },
    {
        year: 2021,
        title: 'Software Developer',
        duration: '6 months',
        details: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis eum, laborum ab praesentium quibusdam eveniet culpa consequatur tempora accusamus quis.'
    }
]

const WorkTimeline = () => {
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Work</h1>
        {data.map((item, index) => (
            <WorkItem1 
                key={index} 
                year={item.year} 
                title={item.title} 
                duration={item.duration} 
                details={item.details} 
            />
        ))}
    </div>
  )
}

export default WorkTimeline