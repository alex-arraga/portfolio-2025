import Image from 'next/image'
import { Card } from '@/components'
import { SkillCard } from '../types'

interface Props {
  skill: SkillCard
}

export const StackSkillCard = ({ skill }: Props) => {
  return (
    <Card key={skill.id} type='skill' className='flex flex-col justify-center items-center gap-4'>
      <div className='relative h-48 w-48 rounded-xl'>
        <Image
          src={skill.image}
          alt={skill.name}
          fill
          priority
          sizes="192px"
          className='object-contain rounded-xl'
        />
      </div>
      <p className='txt-white pt-4'>{skill.name}</p>
    </Card>
  )
}
