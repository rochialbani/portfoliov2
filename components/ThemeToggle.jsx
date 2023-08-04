'use client'

import { useTheme } from 'next-themes'

export function ThemeToggle () {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className='flex flex-col justify-center items-center bg-[#AB2838] dark:bg-[#B84656] rounded-3xl overflow-hidden col-span-1 sm:aspect-auto md:row-span-1 aspect-square shadow-sm cursor-pointer hover:scale-[103%] transition duration-300 ease-in-out'
    >
      <div className='relative inline-flex items-center bottom-1 top-1 right-[35px] sm:right-[60px]'>

        <svg className='absolute h-[70px] w-[70px]  sm:h-[130px] sm:w-[130px] transition-all scale-100 rotate-0 dark:-rotate-90 dark:scale-0 text-[#E8C539]' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'>
          <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M10 3V1m0 18v-2M5.05 5.05 3.636 3.636m12.728 12.728L14.95 14.95M3 10H1m18 0h-2M5.05 14.95l-1.414 1.414M16.364 3.636 14.95 5.05M14 10a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z' />
        </svg>

        <svg className='absolute h-[70px] w-[70px]  sm:h-[130px] sm:w-[130px] transition-all scale-0 rotate-90 dark:rotate-0 dark:scale-100 dark:text-[#23252D]' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 18 20'>
          <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M8.509 5.75c0-1.493.394-2.96 1.144-4.25h-.081a8.5 8.5 0 1 0 7.356 12.746A8.5 8.5 0 0 1 8.509 5.75Z' />
        </svg>

        <span className='sr-only'>Toggle theme</span>
      </div>
    </button>
  )
}
