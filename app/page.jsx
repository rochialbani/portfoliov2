import { ThemeToggle } from '@/components/ThemeToggle'
import { LinkedinCard } from '@/components/LinkedinCard'
import { AboutCard } from '@/components/AboutCard'
import { ImageCard } from '@/components/ImageCard'
import { ProjectsCard } from '@/components/ProjectsCard'
import { GitHubCard } from '@/components/GitHubCard'
import { Image2Card } from '@/components/Image2Card'
import { CVCard } from '@/components/CVCard'
import { MailCard } from '@/components/MailCard'
import { HenryCard } from '@/components/HenryCard'
import { SkillsCard } from '@/components/SkillsCard'

export default function Home () {
  return (
    <div className='relative w-full '>
      <div className='noise bg-noise absolute opacity-[0.08] dark:opacity-5' />
      <div className='flex flex-col m-5 '>
        <div className='grid grid-cols-3 gap-2 md:grid-cols-4 md:gap-4 my-5 container mx-auto xl:px-20 '>
          <AboutCard />
          <ThemeToggle />
          <ImageCard />
          <LinkedinCard />
          <ProjectsCard />
          <GitHubCard />
          <CVCard />
          <MailCard />
          <HenryCard />
          <SkillsCard />
          <Image2Card />
        </div>
      </div>
    </div>
  )
}
// className=' w-[70%] h-full mt-10 p-6 grid grid-cols-4 auto-rows-[76px] mx-auto gap-10'
// className='grid grid-cols-3 gap-2 md:grid-cols-4 md:gap-4 my-5 container mx-auto xl:px-20 '
// className='w-full h-[100vh]  opacity-10 dark:opacity-10'
/**
 * <div className='absolute w-full'>
        <Image src={noise} alt='background gif' className='w-full h-full opacity-[0.035] dark:opacity-[0.015]' width={100} height={100} />
      </div>
 */
