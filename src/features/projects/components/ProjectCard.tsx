import { Card } from '@/components'
import React from 'react'
import { ProjectsReference } from './ProjectsReference'
import { StackPills } from './StackPills'
import { Projects } from '../types'



export const ProjectCard = (data: Projects) => {
  const type = data.type
  const isPersonalProject = type === 'personal'
  const isProdProject = type === 'production'
  const isInProcessProject = type === 'in-process'

  return (
    <Card type='project' projectType={type}>
      {/* Title of project */}
      <div className='flex justify-center items-center gap-2'>
        <ProjectsReference
          status={isPersonalProject ? 'personal' : isInProcessProject ? 'in-process' : 'production'}
        />
        <h3 className='h3-semibold'>{data.title}</h3>
      </div>

      {/* Description */}
      <div className='flex flex-col gap-2 mt-4'>
        <h4 className='h4-normal text-neutral-100'>Descripción</h4>
        <p className='txt-gray-400 font-light'>{data.description}</p>
      </div>

      {/* Stack */}
      <div className='flex flex-col gap-2'>
        <h4 className='h4-normal text-neutral-100'>Stack</h4>

        <div className='flex flex-wrap justify-start items-center w-full gap-2'>
          {data.stack.map((name, index) => (
            <StackPills key={index + name} name={name} />
          ))}
        </div>
      </div>

      {/* Architecture */}
      <div className='flex flex-col gap-2'>
        <h4 className='h4-normal text-neutral-100'>{isPersonalProject ? 'Arquitectura' : 'Rol'}</h4>
        <p className='txt-gray-400 font-light'>{isPersonalProject ? data.architecture : data.rol}</p>
      </div>

      {/* Divisor */}
      <div className='divisor' />

      {/* Goal */}
      <div className='flex flex-col gap-2'>
        <h4 className='h4-normal text-neutral-100'>{isPersonalProject ? 'Objetivo' : 'Fecha'}</h4>
        <p className='txt-gray-400 font-light'>{isPersonalProject ? data.goal : data.date}</p>
      </div>

      {/* Solution */}
      <div className='flex flex-col gap-2'>
        <h4 className='h4-normal text-neutral-100'>{isPersonalProject ? 'Solución' : 'Encargado'}</h4>
        <p className='txt-gray-400 font-light'>{isPersonalProject ? data.solution : data.manager}</p>
      </div>
    </Card>
  )
}
