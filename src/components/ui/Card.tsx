import clsx from "clsx"
import { ProjecTypes } from "@/features/projects/types"

interface Props {
  children: React.ReactNode
  className?: string
  type?: 'default' | 'skill' | 'project'
  projectType?: ProjecTypes
}

export const Card = ({ children, className, type = 'default', projectType }: Props) => {
  const isDefaultUICard = type === 'default'
  const isSkillCard = type === 'skill'
  const isProjectCard = type === 'project'

  const personalProjectType = projectType === 'personal'
  const productionProjectType = projectType === 'production'

  return (
    <div className={clsx(`shadow-card w-full ${className}`,
      {
        'card': isDefaultUICard,
        'skill-card': isSkillCard,
        'project-card personal-project-card': isProjectCard && personalProjectType,
        'project-card production-project-card': isProjectCard && productionProjectType,
      }
    )}>
      {children}
    </div>
  )
}