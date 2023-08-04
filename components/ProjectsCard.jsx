import Link from 'next/link'
import Image from 'next/image'
import computergif from '@/assets/computer.gif'

export function ProjectsCard () {
  return (
    <Link
      href='/projects'
      scroll={false}
      className='relative rounded-3xl col-span-1 md:col-span-2 md:aspect-auto overflow-hidden hover:scale-[103%] transition duration-500 ease-in-out'
    >

      <div className=' w-full h-full absolute top-0 left-0 text-white p-3 md:p-8 z-10 pointer-events-none'>
        <h2 className='mt-1 sm:mt-4 font-bold text-md md:text-xl lg:text-4xl'>
          Projects
          <svg className='text-white absolute right-4 bottom-2 top-auto md:right-8 md:top-10 w-6 h-6' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 14 10'>
            <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M1 5h12m0 0L9 1m4 4L9 9' />
          </svg>
        </h2>
        <p className='sm:pt-2 font-base text-xs md:text-2xl lg:text-2xl md:w-4/5 lg:w-5/6 lg:mt-4'>
          Here you can see all my projects.
        </p>
      </div>
      <div className='w-full h-full absolute'>
        <Image src={computergif} width={90} height={90} className='w-full h-full object-cover opacity-70 dark:opacity-60' alt='' loading='lazy' />
      </div>
    </Link>
  )
}
