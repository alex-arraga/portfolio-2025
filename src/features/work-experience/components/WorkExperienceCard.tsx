import Image from 'next/image'
import { Card } from '@/components'
import { WorkExperience } from '../types';

export const WorkExperienceCard = (data: WorkExperience) => {
  return (
    <Card type='work' className="flex flex-col justify-between gap-6 items-start">
      {/* Image */}
      <div className='relative aspect-video w-full max-h-24 rounded-2xl'>
        <Image
          src={data.image}
          alt={`logo of ${data.name}`}
          fill
          priority
          className='object-cover rounded-2xl'
        />
      </div>

      <div className="w-full">
        {/* Title and description */}
        <div className="flex flex-col gap-6 mb-6">
          <h2 className="h2-medium">{data.name}</h2>
          <p className="txt-gray">
            {data.description}
          </p>
        </div>

        {/* divisor */}
        <div className="divisor" />

        {/* Details */}
        <div className="flex flex-col gap-2 mt-6">
          <p className="txt-gray font-normal">
            <span className="text-white font-medium">Rol: </span>
            {data.role.map((item, index) =>
              <span key={index}>
                {item.length > 1 && index > 0 ? ' | ' + item : item}
              </span>
            )}
          </p>
          <p className="txt-gray font-normal">
            <span className="text-white font-medium">Desde/hasta: </span>
            {data.date}
          </p>
          <p className="txt-gray font-normal">
            <span className="text-white font-medium">Encargado: </span>
            {data.manager}
          </p>
        </div>
      </div>

    </Card>
  )
}
