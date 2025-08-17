import { Card } from '@/components'
import React from 'react'
import { ProjectStatus } from './ProjectStatus'
import { StackPills } from './StackPills'

interface Props {
  type: 'production' | 'personal-project'
}

export const ProjectCard = ({ type }: Props) => {
  return (
    <Card type='project'>
      {/* Title of project */}
      <div className='flex justify-center items-center gap-2'>
        <ProjectStatus status='personal-project' />
        <h3 className='h3-semibold'>RSS Scraper</h3>
      </div>

      {/* Description */}
      <div className='flex flex-col gap-2 mt-4'>
        <h4 className='h4-normal text-neutral-100'>Descripción</h4>
        <p className='text-neutral-400 font-light'>Permite almacenar y gestionar artículos en una base de datos</p>
      </div>

      {/* Stack */}
      <div className='flex flex-col gap-2'>
        <h4 className='h4-normal text-neutral-100'>Stack</h4>

        <div className='flex justify-start items-center w-full gap-2'>
          <StackPills name='go' />
          <StackPills name='postgres' />
        </div>
      </div>

      {/* Architecture */}
      <div className='flex flex-col gap-2'>
        <h4 className='h4-normal text-neutral-100'>{type === 'personal-project' ? 'Arquitectura' : 'Rol'}</h4>
        <p className='text-neutral-400 font-light'>REST API</p>
      </div>

      {/* Divisor */}
      <div className='h-0.5 w-full rounded bg-neutral-800 my-2' />

      {/* Goal */}
      <div className='flex flex-col gap-2'>
        <h4 className='h4-normal text-neutral-100'>{type === 'personal-project' ? 'Objetivo' : 'Fecha'}</h4>
        <p className='text-neutral-400 font-light'>Obtener datos estructurados de múltiples fuentes</p>
      </div>

      {/* Solution */}
      <div className='flex flex-col gap-2'>
        <h4 className='h4-normal text-neutral-100'>{type === 'personal-project' ? 'Solución' : 'Encargado'}</h4>
        <p className='text-neutral-400 font-light'>Ejecuta rutinas para extraer datos de cada feed y los almacena en base de datos.</p>
      </div>
    </Card>
  )
}
