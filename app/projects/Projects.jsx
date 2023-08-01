'use client'
import { useState } from 'react'
// import { projects } from './data'
import Image from 'next/image'

export function Projects ({ project }) {
  const [showAllPhotos, setShowAllPhotos] = useState(false)

  if (showAllPhotos) {
    return (
      <div className='flex justify-center items-center fixed inset-0 bg-[#000000e0] text-white h-[100vh] overflow-hidden'>

        <div>
          <button onClick={() => setShowAllPhotos(false)} className='fixed right-12 top-8 flex gap-1 py-2 px-4 rounded-2xl shadow shadow-black bg-white text-black'>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='w-6 h-6'>
              <path fillRule='evenodd' d='M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z' clipRule='evenodd' />
            </svg>
            Close
          </button>
        </div>

        <div className=' w-[600px] min-h-[200px]  bg-white rounded-2xl'>
          <div className='m-10'>
            <div className='flex justify-stretch items-stretch'>
              <h2 style={{ color: project.skillscolor }} className=' font-bold text-xl mr-48 mb-5'>{project.title}</h2><span className='text-black font-medium'>{project.modal.type}</span>
            </div>

            <p className='text-black '>{project.modal.description}</p>
            <div className='flex mt-2 gap-2  w-full h-8 '>
              {project.skills.map((skill, index) => (
                <p
                  style={{ backgroundColor: project.color }}
                  key={index}
                  className='text-black font-semibold text-xs md:text-md py-2 px-2 md:px-4 bg-green-500 rounded-3xl'
                >
                  {skill}
                </p>
              ))}

            </div>

            <div className='flex justify-between mt-5'>
              <a
                href={project.modal.githublink}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={project.title}
                className='font-bold cursor-pointer  text-black'
              >GitHub
              </a>
              {
                project.modal.link === ''
                  ? ''
                  : <a
                      href={project.modal.link}
                      target='_blank'
                      rel='noopener noreferrer'
                      aria-label={project.title}
                      className='font-bold cursor-pointer  text-black'
                    >Deploy
                  </a>
              }
            </div>
          </div>
        </div>
      </div>

    )
  }

  return (
    <main
      key={project.id}
      onClick={() => setShowAllPhotos(true)}
      className=' flex flex-col cursor-pointer w-[320px] h-[350px] justify-between hover:scale-[103%] transition duration-300 ease-in-out'
    >

      <Image src={project.image} alt={project.title} className=' h-[240px] w-full rounded-2xl dark:p-1 bg-[#ffffffaa]' />

      <div style={{ backgroundColor: project.color }} className=' w-full h-[70px] mb-8 rounded-2xl'>
        <h1 className='flex justify-center items-center m-1 rounded-lg font-bold  text-black'>{project.title}</h1>
        <div className='flex justify-center items-center mt-3 gap-2 w-full h-4 '>
          {project.skills.slice(0, 3).map((skill, index) => (
            <p
              key={index}
              style={{ backgroundColor: project.skillscolor }}
              className='flex justify-center items-center font-semibold text-black  bg-green-200 text-xs md:text-md py-1 px-2 md:px-4 rounded-3xl'
            >
              {skill}
            </p>
          ))}

        </div>
      </div>
    </main>
  )
}

/**
 * <main
      key={project.id}
      onClick={() => setShowAllPhotos(true)}
      className='relative flex cursor-pointer gap-5 justify-end col-span-1 row-span-2 bg-emerald-200 rounded-3xl hover:scale-[103%] transition duration-300 ease-in-out'
    >
      <div className='flex-1 justify-between h-full w-full'>
        <Image src={project.image} alt={project.title} className=' flex w-full h-full rounded-l-3xl' />
      </div>

      <div className='flex-1 p-2'>
        <h1 className='flex justify-center items-center text-black dark:text-white'>{project.title}</h1>

        <div className='flex mt-2 gap-2  w-full h-8 '>
          {project.skills.slice(0, 2).map((skill, index) => (
            <p
              key={index}
              className='text-black dark:text-white text-xs md:text-md py-2 px-2 md:px-4 bg-green-500 rounded-3xl'
            >
              {skill}
            </p>
          ))}

        </div>
      </div>
    </main>
 */
