interface Props {
  children: React.ReactNode
  className?: string
  type?: 'default' | 'skill' | 'project'
}

export const Card = ({ children, className, type = 'default' }: Props) => {
  return (
    <div className={`shadow-card w-full 
      ${type === 'skill' ? 'skill-card' : type === 'project' ? 'project-card' : 'card'} 
      ${className}`}
    >
      {children}
    </div>
  )
}
