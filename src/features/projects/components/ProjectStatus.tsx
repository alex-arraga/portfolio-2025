interface Props {
  withText?: boolean
  status: 'production' | 'personal-project'
}

export const ProjectStatus = ({ status, withText = false }: Props) => {
  return (
    <>
      {withText ? (
        <div className={"flex justify-center items-center gap-2 w-fit"}>
          <div className={`w-2.5 h-2.5 rounded-full ${status === 'production' ? 'bg-blue-300' : 'bg-teal-300'}`} />
          <p>
            {status === 'production' ? 'Production' : 'Personal'}
          </p>
        </div>
      ) : (
        <div className='w-2.5 h-2.5 rounded-full bg-indigo-300' />
      )}
    </>
  )
}
