export function LinkedinCard () {
  return (
    <a
      href='https://www.linkedin.com/in/rocio-albani/'
      target='_blank'
      rel='noopener noreferrer'
      aria-label='Linkedin'
      className='flex flex-col justify-center items-center bg-[#20498A] dark:bg-[#3D6FAD] rounded-3xl relative overflow-hidden col-span-1 aspect-square shadow-sm cursor-pointer hover:scale-[103%] transition duration-300 ease-in-out'
    >

      <svg className='absolute right-4 bottom-4 top-auto md:right-6 md:top-6 w-4 h-4 text-white dark:text-[#ffffffaa]' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 18 18'>
        <path d='M17 0h-5.768a1 1 0 1 0 0 2h3.354L8.4 8.182A1.003 1.003 0 1 0 9.818 9.6L16 3.414v3.354a1 1 0 0 0 2 0V1a1 1 0 0 0-1-1Z' />
        <path d='m14.258 7.985-3.025 3.025A3 3 0 1 1 6.99 6.768l3.026-3.026A3.01 3.01 0 0 1 8.411 2H2.167A2.169 2.169 0 0 0 0 4.167v11.666A2.169 2.169 0 0 0 2.167 18h11.666A2.169 2.169 0 0 0 16 15.833V9.589a3.011 3.011 0 0 1-1.742-1.604Z' />
      </svg>

      <svg className='flex justify-center items-center h-[130px] w-[130px] text-white dark:text-[#ffffffaa]' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 15 15'>
        <path fillRule='evenodd' d='M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z' clipRule='evenodd' />
        <path d='M3 5.012H0V15h3V5.012Z' />
      </svg>

    </a>
  )
}
