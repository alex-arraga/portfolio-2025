import {
  AWSImage,
  DockerImage,
  GitHubImage,
  GitImage,
  GoImage,
  GrafanaImage,
  HexagonImage,
  JiraImage,
  MicroServicesImage,
  MongoImage,
  NextImage,
  NotionImage,
  PostgresImage,
  PostmanImage,
  TypeScriptImage
} from "../assets"

interface SkillCard {
  id: number
  name: string
  image: string
}

export const MainStack: SkillCard[] = [
  {
    id: 1,
    name: 'Next.js',
    image: NextImage,
  },
  {
    id: 2,
    name: 'Go',
    image: GoImage,
  },
  {
    id: 3,
    name: 'TypeScript',
    image: TypeScriptImage,
  },
]

export const ToolSkills: SkillCard[] = [
  {
    id: 1,
    name: 'Postman',
    image: PostmanImage,
  },
  {
    id: 2,
    name: 'Jira',
    image: JiraImage,
  },
  {
    id: 3,
    name: 'Notion',
    image: NotionImage,
  },
  {
    id: 4,
    name: 'Grafana',
    image: GrafanaImage,
  },
]

export const ArchitectureSkills: SkillCard[] = [
  {
    id: 1,
    name: 'Microservicios',
    image: MicroServicesImage,
  },
  {
    id: 2,
    name: 'Hexagonal',
    image: HexagonImage
  }
]

export const OtherSkills: SkillCard[] = [
  {
    id: 1,
    name: 'AWS',
    image: AWSImage,
  },
  {
    id: 2,
    name: 'GitHub',
    image: GitHubImage,
  },
  {
    id: 3,
    name: 'Git',
    image: GitImage,
  },
  {
    id: 4,
    name: 'Docker',
    image: DockerImage,
  },
  {
    id: 5,
    name: 'Postgres',
    image: PostgresImage,
  },
  {
    id: 6,
    name: 'Mongo',
    image: MongoImage,
  }
]