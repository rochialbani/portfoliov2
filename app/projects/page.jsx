import Link from 'next/link'
import Image from 'next/image'
import keyboard from '@/app/keyboard.png'
import { Projects } from './Projects'
import { projects } from './data'

function page () {
  return (
    <div className='flex-1 h-full mt-10 '>
      <div className='noise bg-noise absolute opacity-[0.08] dark:opacity-5 ' />
      <div className='flex conteiner gap-5   col-span-3 lg:col-span-5 justify-center items-center aspect-2/1 md:aspect-auto '>

        <Link
          href='/'
          scroll={false}
          className='flex ml-5 h-[250px] lg:w-[200px] w-[150px] xl:w-[300px] justify-center items-center rounded-3xl bg-[#AB2838] dark:bg-[#B84656] col-span-1 aspect-square hover:scale-[103%] transition duration-300 ease-in-out'
        >
          <svg className='text-white dark:text-[#ffffffaa] text-[150px]' fill='currentColor' viewBox='0 0 16 16' height='1em' width='1em'>
            <path fillRule='evenodd' d='M12 8a.5.5 0 01-.5.5H5.707l2.147 2.146a.5.5 0 01-.708.708l-3-3a.5.5 0 010-.708l3-3a.5.5 0 11.708.708L5.707 7.5H11.5a.5.5 0 01.5.5z' />
          </svg>
        </Link>

        <div className='flex h-[250px] w-[400px] md:w-[500px] lg:w-[600px] xl:w-[700px] justify-center items-center rounded-3xl bg-[#AB2838] dark:bg-[#B84656] col-span-1 aspect-square'>
          <h1 className='text-[40px] md:text-[60px] lg:text-[70px] font-semibold text-white dark:text-[#ffffffaa]'>Projects</h1>
        </div>

        <div className='rounded-3xl h-[250px] w-[150px] lg:w-[200px] xl:w-[300px] mr-5 bg-emerald-200 col-span-1 aspect-square'>
          <Image src={keyboard} alt='teclado image' className='rounded-3xl  w-full h-full absoluter object-cover ' />
        </div>

      </div>
      <div className='grid grid-cols-3 justify-center auto-rows-[320px] mx-auto gap-5 mt-[220px] md:mt-[300px] lg:mt-[330px] md:mr-[70px] md:ml-3 xl:mt-96 lg:mr-18 lg:ml-2'>
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
