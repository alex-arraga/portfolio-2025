interface Props {
  name: string
}

export const StackPills = ({ name }: Props) => {
  return (
    <div className={`flex justify-center items-center py-1 px-3 rounded-full w-fit
      ${name === 'Go' ? 'bg-golang text-white' : 'bg-white text-black'}`
    }>
      {name}
    </div>
  )
}
