import { ProjecTypes } from "../types"
import clsx from 'clsx';

interface Props {
  withText?: boolean
  status: ProjecTypes
}

export const ProjectsReference = ({ status, withText = false }: Props) => {
  const statusClass = clsx('w-2.5 h-2.5 rounded-full', {
    'bg-purple-500': status === 'production',
    'bg-purple-200': status === 'prod-in-process',
    'bg-teal-500': status === 'personal',
    'bg-teal-100': status === 'personal-in-process'
  })

  return (
    <>
      {withText ? (
        <div className={"flex justify-center items-center gap-2 w-fit"}>
          <div className={statusClass} />
          <p>
            {status === 'production' ? 'En producción'
              : status === 'personal' ? 'Personal'
                : status === 'personal-in-process' ? 'Personal - En desarollo'
                  : 'Producción - En desarrollo'
            }
          </p>
        </div>
      ) : (
        <div className={statusClass} />
      )}
    </>
  )
}
