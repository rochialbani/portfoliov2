import Link from 'next/link'
import Image from 'next/image'
import keyboard from '@/app/keyboard.png'
import { Projects } from './Projects'
import { projects } from './data'

function page () {
  return (
    <div className='flex-1 h-full mt-10'>
      <div className='noise bg-noise absolute opacity-[0.08] dark:opacity-5' />
      <div className='grid grid-cols-5 justify-center auto-rows-[40px] mx-auto gap-10 ml-[250px]'>

        <Link
          href='/'
          scroll={false}
          className='flex justify-center items-center rounded-3xl bg-[#AB2838] dark:bg-[#B84656] col-span-1 row-span-2 hover:scale-[103%] transition duration-300 ease-in-out'
        >
          <svg className='text-white dark:text-[#ffffffaa] text-[150px]' fill='currentColor' viewBox='0 0 16 16' height='1em' width='1em'>
            <path fillRule='evenodd' d='M12 8a.5.5 0 01-.5.5H5.707l2.147 2.146a.5.5 0 01-.708.708l-3-3a.5.5 0 010-.708l3-3a.5.5 0 11.708.708L5.707 7.5H11.5a.5.5 0 01.5.5z' />
          </svg>
        </Link>

        <div className='rounded-3xl bg-[#AB2838] dark:bg-[#B84656] col-span-2 row-span-2'>
          <h1 className='flex justify-center items-center text-[80px] font-semibold text-white dark:text-[#ffffffaa]'>Projects</h1>
        </div>

        <div className='rounded-3xl bg-emerald-200 col-span-1 row-span-2'>
          <Image src={keyboard} alt='teclado image' className='rounded-3xl  w-full h-full absoluter object-cover ' />
        </div>

      </div>
      <div className='grid grid-cols-3 justify-center auto-rows-[320px] mx-auto gap-10 mt-10 mr-[100px] ml-[100px]'>
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
