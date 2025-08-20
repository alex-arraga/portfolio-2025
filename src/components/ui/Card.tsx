import clsx from "clsx"
import { ProjecTypes } from "@/features/projects/types"

interface Props {
  children: React.ReactNode
  className?: string
  type?: 'default' | 'skill' | 'project' | 'work'
  projectType?: ProjecTypes
}

export const Card = ({ children, className, type = 'default', projectType }: Props) => {
  const isDefaultUICard = type === 'default'
  const isSkillCard = type === 'skill'
  const isProjectCard = type === 'project'
  const isWorkCard = type === 'work'

  const personalProjectType = projectType === 'personal'
  const productionProjectType = projectType === 'production'
  const inProcessProjectType = projectType === 'in-process'

  return (
    <div className={clsx(`shadow-card w-full ${className}`,
      {
        'card': isDefaultUICard,
        'skill-card': isSkillCard,
        'work-card': isWorkCard,
        'project-card personal-project-card': isProjectCard && personalProjectType,
        'project-card production-project-card': isProjectCard && productionProjectType,
        'project-card in-process-project-card': isProjectCard && inProcessProjectType,
      }
    )}>
      {children}
    </div>
  )
}