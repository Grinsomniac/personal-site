import React from 'react'
import ProjectItem from './ProjectItem'
import thumbnail1 from '../assets/projectThumbnails/thumbnail1.jpg'
import thumbnail2 from '../assets/projectThumbnails/thumbnail2.png'
import thumbnail3 from '../assets/projectThumbnails/thumbnail3.jpg'
import thumbnail4 from '../assets/projectThumbnails/thumbnail4.jpg'

const Projects = () => {
  return (
    <div id='prjects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
        <p className='text-center py-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptatum illum veniam itaque accusantium quasi,
             rem doloribus, iusto rerum cum reiciendis sed. Quaerat natus vero ut veritatis tenetur esse quis?
        </p>
        <div className='grid sm:grid-cols-2 gap-12'>
            <ProjectItem title='Project 2' img={"src/assets/projectThumbnails/thumbnail1.jpg"} />
            <ProjectItem title='Project 1' img={"src/assets/projectThumbnails/thumbnail1.jpg"} />
            <ProjectItem title='Project 3' img={"src/assets/projectThumbnails/thumbnail1.jpg"} />
            <ProjectItem title='Project 4' img={"src/assets/projectThumbnails/thumbnail1.jpg"} />
        </div>
    </div>
  )
}

export default Projects

