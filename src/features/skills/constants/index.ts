import { SkillCard } from "../types"
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
  RedisImage,
  TypeScriptImage
} from "../assets"


export const MainSkills: SkillCard[] = [
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
]

export const StorageSkills: SkillCard[] = [
  {
    id: 1,
    name: 'Redis',
    image: RedisImage,
  },
  {
    id: 2,
    name: 'Postgres',
    image: PostgresImage,
  },
  {
    id: 3,
    name: 'Mongo',
    image: MongoImage,
  },
]