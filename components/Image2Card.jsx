import Image from 'next/image'
import computer404 from '@/assets/computer404.png'

export function Image2Card () {
  return (
    <div className='rounded-3xl w-full h-full relative col-span-1 aspect-square'>
      <Image src={computer404} alt='computer image' fill='true' sizes='100px' className='rounded-3xl  w-full h-full absoluter object-cover ' />
    </div>
  )
}
