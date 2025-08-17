interface Props {
  children: React.ReactNode
  className: string
  type?: 'default' | 'skill'
}

export const Card = ({ children, className, type = 'default' }: Props) => {
  return (
    <div className={`shadow-card w-full ${type === 'skill' ? 'skill-card' : 'card'} ${className}`}>
      {children}
    </div>
  )
}
