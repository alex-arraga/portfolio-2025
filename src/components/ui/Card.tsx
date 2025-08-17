interface Props {
  children: React.ReactNode
  className: string
}

export const Card = ({ children, className }: Props) => {
  return (
    <div className={`card shadow-card w-full ${className}`}>
      {children}
    </div>
  )
}
