import Link from 'next/link'
import Image from 'next/image'
import keyboard from '@/app/keyboard.png'
import { Projects } from './Projects'
import { projects } from './data'

function page () {
  return (
    <div className='relative w-full'>
      <div className='noise bg-noise absolute opacity-[0.08] dark:opacity-5' />

      <div className='grid grid-cols-3 gap-2 xl:grid-cols-4  col-span-1 aspect-auto rounded-3xl mt-10 mr-7 ml-7 cursor-pointer p-4 shadow-xl'>

        <Link
          href='/'
          scroll={false}
          className='flex flex-col justify-center items-center bg-[#AB2838] dark:bg-[#B84656] rounded-3xl col-span-1 relative overflow-hidden aspect-square shadow-sm cursor-pointer hover:scale-[103%] transition duration-300 ease-in-out'
        >
          <svg className='flex justify-center items-center absolute font-bold  text-white dark:text-[#ffffffaa] text-[50px] sm:text-[110px]' fill='currentColor' viewBox='0 0 16 16' height='1em' width='1em'>
            <path fillRule='evenodd' d='M12 8a.5.5 0 01-.5.5H5.707l2.147 2.146a.5.5 0 01-.708.708l-3-3a.5.5 0 010-.708l3-3a.5.5 0 11.708.708L5.707 7.5H11.5a.5.5 0 01.5.5z' />
          </svg>
        </Link>

        <div className='flex flex-col justify-center items-center bg-[#AB2838] dark:bg-[#B84656] rounded-3xl relative col-span-1 xl:col-span-2 aspect-auto overflow-hidden shadow-sm'>
          <h1 className='flex justify-center items-center text-[13px] sm:text-[35px] md:text-[55px] lg:text-[65px] xl:text-[90px] font-semibold text-white dark:text-[#ffffffaa]'>Projects</h1>
        </div>

        <div className='flex flex-col rounded-3xl w-full h-full relative col-span-1 aspect-square'>
          <Image src={keyboard} alt='teclado image' className='rounded-3xl  w-full h-full absoluter object-cover  ' />
        </div>

      </div>

      <div className='flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 justify-center col-span-1 aspect-auto rounded-3xl  cursor-pointer ml-7 p-4 pt-8 shadow-xl'>
        {
        projects?.map((project) => (
          <Projects key={project.id} project={project} />
        ))
      }
      </div>

    </div>
  )
}

export default page

// className='grid  grid-cols-3 gap-2 md:grid-cols-4 aspect-auto mx-5 sm:gap-4 my-5 container  xl:px-20'

// className='grid grid-cols-3 justify-center auto-rows-[320px] mx-auto gap-5 mt-[220px] md:mt-[300px] lg:mt-[330px] md:mr-[70px] md:ml-3 xl:mt-96 lg:mr-18 lg:ml-2'
