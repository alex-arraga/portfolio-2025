import Image from 'next/image'
import { Card } from '@/components'
import { SkillCard } from '../types'

export const StackSkillCard = ({ id, image, name }: SkillCard) => {
  return (
    <Card type='skill' className='flex flex-col justify-center items-center gap-4'>
      <div className='relative h-40 w-40 rounded-xl'>
        <Image
          src={image}
          alt={name}
          fill
          priority
          sizes="160px"
          className='object-contain rounded-xl'
        />
      </div>
      <p>{name}</p>
    </Card>
  )
}
