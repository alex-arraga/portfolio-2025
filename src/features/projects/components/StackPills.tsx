interface Props {
  name: string
}

export const StackPills = ({ name }: Props) => {
  return (
    <div className={`flex justify-center items-center py-1 px-3 rounded-full capitalize w-fit
      ${name === 'go' ? 'bg-sky-400 text-white' : 'bg-white text-black'}`
    }>
      {name}
    </div>
  )
}
