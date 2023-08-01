import Image from 'next/image'
import computerimg from '../assets/computerimg.png'

export function GitHubCard () {
  return (
    <a
      href='https://github.com/rochialbani'
      target='_blank'
      rel='noopener noreferrer'
      aria-label='GitHub'
      className='relative rounded-3xl col-span-2 md:aspect-auto overflow-hidden cursor-pointer hover:scale-[103%] transition duration-300 ease-in-out'
    >

      <div className='absolute w-full h-full'>
        <Image
          src={computerimg} alt='computer image' fill='true' sizes='100px' className=' w-full h-full object-cover opacity-60'
        />

        <svg className='absolute right-4 bottom-4 top-auto md:right-6 md:top-6 w-4 h-4 text-white dark:text-[#ffffffaa]' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 18 18'>
          <path d='M17 0h-5.768a1 1 0 1 0 0 2h3.354L8.4 8.182A1.003 1.003 0 1 0 9.818 9.6L16 3.414v3.354a1 1 0 0 0 2 0V1a1 1 0 0 0-1-1Z' />
          <path d='m14.258 7.985-3.025 3.025A3 3 0 1 1 6.99 6.768l3.026-3.026A3.01 3.01 0 0 1 8.411 2H2.167A2.169 2.169 0 0 0 0 4.167v11.666A2.169 2.169 0 0 0 2.167 18h11.666A2.169 2.169 0 0 0 16 15.833V9.589a3.011 3.011 0 0 1-1.742-1.604Z' />
        </svg>

      </div>
      <div className='absolute top-[110px] left-6 text-white dark:text-[#ffffffaa] font-bold text-md md:text-xl lg:text-5xl'>
        GitHub
      </div>
    </a>
  )
}

/**
 * <svg className=' h-[130px] w-[130px] text-white dark:text-[#ffffffaa]' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 20 20'>
          <path fill-rule='evenodd' d='M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z' clip-rule='evenodd' />
        </svg>
 */
