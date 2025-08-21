"use client"

import { IoLogoGithub, IoLogoLinkedin, IoLogoWhatsapp } from 'react-icons/io5'
import { MyGitHub, MyLinkedIn, MyWhatsApp } from '@/features/about-me/constants'

export const SocialNetworks = () => {
  return (
    <div className="absolute flex justify-center items-center gap-10 w-full bottom-28 lg:bottom-5">

      <a href={MyWhatsApp} target='_blank' rel="noreferrer nofollow">
        <IoLogoWhatsapp className="text-neutral-300 w-7 h-7 md:h-8 md:w-8 transition-all duration-300 hover:scale-125 hover:text-green-400" />
      </a>

      <a href={MyLinkedIn} target='_blank' rel="noreferrer nofollow">
        <IoLogoLinkedin className="text-neutral-300 w-7 h-7 md:h-8 md:w-8 transition-all duration-300 hover:scale-125 hover:text-blue-400" />
      </a>

      <a href={MyGitHub} target='_blank' rel="noreferrer nofollow">
        <IoLogoGithub className="text-neutral-300 w-7 h-7 md:h-8 md:w-8 transition-all duration-300 hover:scale-125 hover:text-white" />
      </a>

    </div>
  )
}
