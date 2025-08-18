"use client"

import { IoLogoGithub, IoLogoLinkedin, IoLogoWhatsapp } from 'react-icons/io5'
import { MyGitHub, MyLinkedIn, MyWhatsApp } from '@/features/about-me/constants'

export const SocialNetworks = () => {
  return (
    <div className="absolute flex justify-center items-center gap-10 w-full bottom-5">

      <a href={MyWhatsApp} target='_blank' rel="noreferrer nofollow">
        <IoLogoWhatsapp size={30} className="text-neutral-300 transition-all duration-300 hover:scale-125 hover:text-white" />
      </a>

      <a href={MyLinkedIn} target='_blank' rel="noreferrer nofollow">
        <IoLogoLinkedin size={30} className="text-neutral-300 transition-all duration-300 hover:scale-125 hover:text-white" />
      </a>

      <a href={MyGitHub} target='_blank' rel="noreferrer nofollow">
        <IoLogoGithub size={30} className="text-neutral-300 transition-all duration-300 hover:scale-125 hover:text-white" />
      </a>

    </div>
  )
}
