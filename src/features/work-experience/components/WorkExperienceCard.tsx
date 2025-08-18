import Image from 'next/image'
import { Card } from '@/components'
import { WorkExperience } from '../types';

export const WorkExperienceCard = (data: WorkExperience) => {
  return (
    <Card className="flex justify-between items-center gap-20">
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

      {/* Image */}
      <div className="relative aspect-square h-60 w-60 rounded 2xl">
        <Image
          src={data.image}
          alt={`logo of ${data.name}`}
          fill
          priority
          className='object-contain rounded-2xl'
        />
      </div>
    </Card>
  )
}
