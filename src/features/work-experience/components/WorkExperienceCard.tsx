import { Card } from '@/components'
import Image from 'next/image'
import { NextImage } from '../../skills/assets/index';

export const WorkExperienceCard = () => {
  return (
    <Card className="flex justify-between items-center gap-20">
      <div className="w-full">

        {/* Title and description */}
        <div className="flex flex-col gap-6 mb-6">
          <h2 className="h2-medium">Garage Go</h2>
          <p className="txt-gray">
            Empresa automotriz chilena que ofrece servicios de mantenimiento vehicular con retiro y entrega a domicilio. Se presentan como “la primera startup automotriz” en Chile en ofrecer una infraestructura de soluciones para un servicio completo de movilidad eficiente.
          </p>
        </div>

        {/* divisor */}
        <div className="divisor" />

        {/* Details */}
        <div className="flex flex-col gap-2 mt-6">
          <p className="txt-gray font-normal">
            <span className="text-white font-medium">Rol: </span>
            Fullstack Developer
          </p>
          <p className="txt-gray font-normal">
            <span className="text-white font-medium">Desde/hasta: </span>
            21/04/25 - Actualidad
          </p>
          <p className="txt-gray font-normal">
            <span className="text-white font-medium">Encargado: </span>
            Javier Palma | +56 9 34172037
          </p>
        </div>
      </div>

      {/* Image */}
      <div className="relative aspect-square h-60 w-60 rounded 2xl">
        <Image
          src={NextImage}
          alt='algo'
          fill
          priority
          className='object-contain rounded-2xl'
        />
      </div>
    </Card>
  )
}
