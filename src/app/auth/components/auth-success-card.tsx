import React, { FC, ReactNode } from 'react'

interface Props {
  title: string
  subtitle: string
  icon: ReactNode
  buttonTitle: string
  onButtonClick: () => void
}

const AuthSuccessCard: FC<Props> = ({
  title,
  subtitle,
  icon,
  buttonTitle,
  onButtonClick,
}) => {
  return (
    <div className={'w-full max-w-[322px]'}>
      <h1 className={'text-2xl font-semibold'}>{title}</h1>
    </div>
  )
}

export default AuthSuccessCard
