import { ProjecTypes } from "../types"

interface Props {
  withText?: boolean
  status: ProjecTypes
}

export const ProjectsReference = ({ status, withText = false }: Props) => {
  const circleStatusClass = `w-2.5 h-2.5 rounded-full ${status === 'production' ? 'bg-blue-300' : 'bg-teal-300'}`

  return (
    <>
      {withText ? (
        <div className={"flex justify-center items-center gap-2 w-fit"}>
          <div className={circleStatusClass} />
          <p>
            {status === 'production' ? 'Production' : 'Personal'}
          </p>
        </div>
      ) : (
        <div className={circleStatusClass} />
      )}
    </>
  )
}
