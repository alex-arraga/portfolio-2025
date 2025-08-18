"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { IoPersonCircleSharp } from 'react-icons/io5'
import { PiBagSimpleFill, PiCodeSimpleBold, PiFileCodeFill } from 'react-icons/pi'

const OptionsNav = [
  {
    id: 1,
    name: 'About Me',
    path: '/about-me',
    icon: <IoPersonCircleSharp className='w-5 h-5 text-neutral-700' />
  },
  {
    id: 2,
    name: 'Projects',
    path: '/projects',
    icon: <PiFileCodeFill className='w-5 h-5 text-neutral-700' />
  },
  {
    id: 3,
    name: 'Tech Stack',
    path: '/tech-stack',
    icon: <PiCodeSimpleBold className='w-5 h-5 text-neutral-700' />
  },
  {
    id: 4,
    name: 'Work Experience',
    path: '/work-experience',
    icon: <PiBagSimpleFill className='w-5 h-5 text-neutral-700' />
  },
]

export const Navbar = () => {
  const pahtname = usePathname()

  return (
    <aside className='hidden md:block fixed left-0 w-16 min-h-screen border-r border-neutral-950'>
      <nav className='flex flex-col items-center justify-center min-h-screen gap-10'>

        {OptionsNav.map((option) => (
          <div
            key={option.id + option.name}
            className={`flex justify-center items-center p-1 rounded-full duration-300 transition-all hover:scale-125
            ${pahtname === option.path ? 'bg-white' : 'hover:brightness-200'}
          `}>
            <Link
              href={option.path}
              title={option.name}
            >
              {option.icon}
            </Link>
          </div>
        ))}

      </nav>
    </aside>
  )
}
