import { IoLogoGithub, IoLogoLinkedin, IoLogoWhatsapp } from 'react-icons/io5'

export const SocialNetworks = () => {
  return (
    <div className="absolute flex justify-center items-center gap-10 w-full bottom-5">
      <IoLogoWhatsapp size={36} className="text-white" />
      <IoLogoLinkedin size={36} className="text-white" />
      <IoLogoGithub size={36} className="text-white" />
    </div>
  )
}
