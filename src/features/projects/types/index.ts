interface BaseProjects {
  title: string
  description: string
  stack: string[],
}

export type ProjecTypes = 'personal' | 'production' | 'prod-in-process' | 'personal-in-process'

interface PersonalProjects extends BaseProjects {
  type: 'personal'
  architecture?: string,
  goal: string,
  solution: string
  link: string
}

interface ProductionProjects extends BaseProjects {
  type: 'production'
  rol: string,
  date: string,
  manager: string
  link: string
}

interface ProductionInProcessProjects extends BaseProjects {
  type: 'prod-in-process'
  rol: string,
  date: string,
  manager: string
}

interface PersonalInProcessProjects extends BaseProjects {
  type: 'personal-in-process'
  architecture?: string,
  goal: string
  solution?: string,
  link: string
}

export type Projects = PersonalProjects | ProductionProjects | ProductionInProcessProjects | PersonalInProcessProjects