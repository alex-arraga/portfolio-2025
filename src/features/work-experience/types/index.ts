type CompanyNames = 'Garage Go' | 'Gestiona Tus Datos' | 'Podo Vip'
type Roles = 'Full Stack Developer' | 'Diseñador UX/UI'

export interface WorkExperience {
  name: CompanyNames,
  description: string,
  role: Roles[],
  date: string,
  manager: string,
  image: string
}