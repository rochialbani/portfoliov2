export function MailCard () {
  return (
    <a
      href='mailto:rocio.albani@hotmail.com'
      target='_blank'
      rel='noopener noreferrer'
      aria-label='Mail'
      className='flex flex-col justify-center items-center bg-[#297EA1] dark:bg-[#4A88C5] rounded-3xl relative overflow-hidden col-span-1 aspect-square shadow-sm cursor-pointer hover:scale-[103%] transition duration-300 ease-in-out'
    >

      <svg className='absolute right-4 bottom-4 top-auto md:right-6 md:top-6 w-4 h-4 text-white dark:text-[#ffffffaa]' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 18 18'>
        <path d='M17 0h-5.768a1 1 0 1 0 0 2h3.354L8.4 8.182A1.003 1.003 0 1 0 9.818 9.6L16 3.414v3.354a1 1 0 0 0 2 0V1a1 1 0 0 0-1-1Z' />
        <path d='m14.258 7.985-3.025 3.025A3 3 0 1 1 6.99 6.768l3.026-3.026A3.01 3.01 0 0 1 8.411 2H2.167A2.169 2.169 0 0 0 0 4.167v11.666A2.169 2.169 0 0 0 2.167 18h11.666A2.169 2.169 0 0 0 16 15.833V9.589a3.011 3.011 0 0 1-1.742-1.604Z' />
      </svg>

      <svg className='absolute flex justify-center items-center h-[130px] w-[130px] text-white dark:text-[#ffffffaa]' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 20 16'>
        <path d='m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z' />
        <path d='M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z' />
      </svg>

    </a>
  )
}
