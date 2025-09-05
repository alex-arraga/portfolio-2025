import { Card } from '@/components'
import React from 'react'
import { ProjectsReference } from './ProjectsReference'
import { StackPills } from './StackPills'
import { Projects } from '../types'

export const ProjectCard = (data: Projects) => {
  const type = data.type

  const isPersonalProject = type === 'personal'
  const isPersonalInProcessProject = type === 'personal-in-process'
  const isProductionProject = type === 'production'
  const isProductionInProcessProject = type === 'prod-in-process'

  const pushToLink = () => {
    if (isProductionProject || isPersonalProject || isPersonalInProcessProject) {
      return data.link
    }
  }

  return (
    <a href={pushToLink()} target='_blank' rel="noreferrer nofollow">
      <Card type='project' projectType={type}>
        {/* Title of project */}
        <div className='flex justify-center items-center gap-2'>
          <ProjectsReference status={type} />
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
          <h4 className='h4-normal text-neutral-100'>
            {isPersonalProject || isPersonalInProcessProject && data.architecture ? 'Arquitectura'
              : isProductionProject || isProductionInProcessProject && data.rol ? 'Rol'
                : ''
            }
          </h4>
          <p className='txt-gray-400 font-light'>
            {
              isPersonalProject ? data.architecture
                : isPersonalInProcessProject ? data.architecture
                  : data.rol
            }
          </p>
        </div>

        {/* Divisor */}
        <div className='divisor' />

        {/* Goal */}
        <div className='flex flex-col gap-2'>
          <h4 className='h4-normal text-neutral-100'>
            {isPersonalProject || isPersonalInProcessProject && data.goal ? 'Objetivo'
              : isProductionProject || isProductionInProcessProject && data.date ? 'Fecha'
                : ''
            }
          </h4>
          <p className='txt-gray-400 font-light'>
            {
              isPersonalProject || isPersonalInProcessProject ? data.goal
                : data.date
            }
          </p>
        </div>

        {/* Solution */}
        <div className='flex flex-col gap-2'>
          <h4 className='h4-normal text-neutral-100'>
            {isPersonalProject || isPersonalInProcessProject && data.solution ? 'Solución'
              : isProductionProject || isProductionInProcessProject && data.manager ? 'Encargado'
                : ''
            }
          </h4>
          <p className='txt-gray-400 font-light'>
            {
              isPersonalProject ? data.solution
                : isPersonalInProcessProject ? data.solution
                  : data.manager
            }
          </p>
        </div>
      </Card>
    </a>
  )
}
