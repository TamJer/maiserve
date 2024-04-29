import React, { FC, ReactNode } from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Logo from '@/assets/images/logo.svg'

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
    <div className={'w-full max-w-[322px] text-center'}>
      <Image
        src={Logo}
        alt={'MaiServe'}
        width={90}
        height={90}
        className={'mx-auto'}
      />
      <span
        className={
          'mt-32 flex flex-col items-center justify-center text-primary'
        }
      >
        {icon}
      </span>
      <h1 className={'mt-[29px] text-2xl font-semibold'}>{title}</h1>
      <h3 className={'mt-0.5 text-base font-medium'}>{subtitle}</h3>
      <Button className={'mt-10 w-full'} onClick={onButtonClick}>
        {buttonTitle}
      </Button>
    </div>
  )
}

export default AuthSuccessCard
