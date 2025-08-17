import { Card } from '@/components'
import React from 'react'
import { ProjectStatus } from './ProjectStatus'

export const ProjectCard = () => {
  return (
    <Card type='project'>
      {/* Title of project */}
      <div className='flex justify-center items-center gap-2'>
        <ProjectStatus status='personal-project' />
        <h3 className='h3-semibold'>RSS Scraper</h3>
      </div>

      {/* Description */}
      <div className='flex flex-col gap-2 mt-4'>
        <h4 className='h4-normal'>Descripción</h4>
        <p className='text-neutral-400 font-light'>Permite almacenar y gestionar artículos en una base de datos</p>
      </div>

      {/* Architecture */}
      <div className='flex flex-col gap-2'>
        <h4 className='h4-normal'>Arquitectura</h4>
        <p className='text-neutral-400 font-light'>REST API</p>
      </div>

      {/* Divisor */}
      <div className='h-0.5 w-full rounded bg-neutral-800 my-2' />

      {/* Goal */}
      <div className='flex flex-col gap-2'>
        <h4 className='h4-normal'>Objetivo</h4>
        <p className='text-neutral-400 font-light'>Obtener datos estructurados de múltiples fuentes</p>
      </div>

      {/* Solution */}
      <div className='flex flex-col gap-2'>
        <h4 className='h4-normal'>Solucion</h4>
        <p className='text-neutral-400 font-light'>Ejecuta rutinas para extraer datos de cada feed y los almacena en base de datos.</p>
      </div>
    </Card>
  )
}
