export function HenryCard () {
  return (
    <a
      href='https://certificates.soyhenry.com/cert?id=f8736d82-e9c1-40b0-8747-8fc3d0712eae'
      target='_blank'
      rel='noopener noreferrer'
      aria-label='Henry'
      className='flex flex-col justify-center items-center bg-[#E5A836] dark:bg-[#E8C539] rounded-3xl col-span-1 relative overflow-hidden aspect-square shadow-sm cursor-pointer hover:scale-[103%] transition duration-300 ease-in-out'
    >

      <svg className='absolute right-2 bottom-1 sm:right-4 sm:bottom-4 top-auto md:right-6 md:top-6 w-4 h-4 text-white dark:text-[#ffffffaa]' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 18 18'>
        <path d='M17 0h-5.768a1 1 0 1 0 0 2h3.354L8.4 8.182A1.003 1.003 0 1 0 9.818 9.6L16 3.414v3.354a1 1 0 0 0 2 0V1a1 1 0 0 0-1-1Z' />
        <path d='m14.258 7.985-3.025 3.025A3 3 0 1 1 6.99 6.768l3.026-3.026A3.01 3.01 0 0 1 8.411 2H2.167A2.169 2.169 0 0 0 0 4.167v11.666A2.169 2.169 0 0 0 2.167 18h11.666A2.169 2.169 0 0 0 16 15.833V9.589a3.011 3.011 0 0 1-1.742-1.604Z' />
      </svg>

      <p className='absolute flex justify-center items-center font-bold uppercase text-white dark:text-[#ffffffaa] text-5xl md:text-[110px] transition duration-300 ease-in-out'>
        HN
      </p>
    </a>
  )
}
