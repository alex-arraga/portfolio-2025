import { Card } from '@/components';
import Image from 'next/image';

interface SkillCard {
  id: number
  name: string
  image: string
  alt: string
}

const MainStack: SkillCard[] = [
  {
    id: 1,
    name: 'next',
    image: '',
    alt: ''
  },
  {
    id: 1,
    name: 'next',
    image: '',
    alt: ''
  },
  {
    id: 1,
    name: 'next',
    image: '',
    alt: ''
  },
]

const ToolSkills: SkillCard[] = [
  {
    id: 1,
    name: 'next',
    image: '',
    alt: ''
  },
  {
    id: 1,
    name: 'next',
    image: '',
    alt: ''
  },
  {
    id: 1,
    name: 'next',
    image: '',
    alt: ''
  },
]

const ArchitectureSkills: SkillCard[] = [
  {
    id: 1,
    name: 'next',
    image: '',
    alt: ''
  },
  {
    id: 1,
    name: 'next',
    image: '',
    alt: ''
  },
  {
    id: 1,
    name: 'next',
    image: '',
    alt: ''
  },
]

const OtherSkills: SkillCard[] = [
  {
    id: 1,
    name: 'next',
    image: '',
    alt: ''
  },
  {
    id: 1,
    name: 'next',
    image: '',
    alt: ''
  },
  {
    id: 1,
    name: 'next',
    image: '',
    alt: ''
  },
]


export default function TechStackPage() {
  return (
    <main className="container-page">
      <section className="container-section">

        <h1 className="h1-bold">Tech Stack</h1>

        {/* Main */}
        <div className='div-central'>
          <h2 className="h2-semibold mt-10">Main</h2>

          <Card type='skill' className='flex flex-col justify-center items-center gap-4'>
            <div className='relative h-48 w-48 rounded-xl'>
              <Image
                src={'/images/skills/next.png'}
                alt='next.js'
                fill
                className='object-contain rounded-xl'
              />
            </div>
            <p className='txt-white pt-4'>Next.js</p>
          </Card>

        </div>



      </section>
    </main>
  );
}