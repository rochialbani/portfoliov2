import Image from 'next/image'
import playnoise from '@/assets/film.gif'

export function ImageCard () {
  return (
    <div className='w-full h-full relative rounded-3xl bg-white col-span-1 row-span-1 aspect-square'>
      <Image src={playnoise} alt='play noice' loading='lazy' className='absolute w-full h-full rounded-3xl light:object-cover dark:w-full dark:h-full dark:p-1 ' />
    </div>
  )
}
