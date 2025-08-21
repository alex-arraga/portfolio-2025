import { ProjecTypes } from "../types"
import clsx from 'clsx';

interface Props {
  withText?: boolean
  status: ProjecTypes
}

export const ProjectsReference = ({ status, withText = false }: Props) => {
  const statusClass = clsx('w-2.5 h-2.5 rounded-full', {
    'bg-purple-400': status === 'production',
    'bg-teal-400': status === 'personal',
    'bg-amber-300': status === 'in-process'
  })

  return (
    <>
      {withText ? (
        <div className={"flex justify-center items-center gap-2 w-fit"}>
          <div className={statusClass} />
          <p>
            {status === 'production' ? 'En producción'
              : status === 'personal' ? 'Personal'
                : 'En desarollo'
            }
          </p>
        </div>
      ) : (
        <div className={statusClass} />
      )}
    </>
  )
}
