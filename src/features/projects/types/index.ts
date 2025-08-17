interface BaseProjects {
  title: string
  description: string
  stack: string[],
}

interface PersonalProjects extends BaseProjects {
  type: 'personal'
  architecture?: string,
  goal: string,
  solution: string
}

interface ProductionProjects extends BaseProjects {
  type: 'production'
  rol: string,
  date: string,
  manager: string
}

export type Projects = PersonalProjects | ProductionProjects