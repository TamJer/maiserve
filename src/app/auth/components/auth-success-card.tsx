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
    <div
      className={
        'w-full max-w-xs border-border text-center 2xl:max-w-3xl 2xl:rounded-lg 2xl:border 2xl:bg-card 2xl:px-24 2xl:py-28 2xl:text-card-foreground'
      }
    >
      <Image
        src={Logo}
        alt={'MaiServe'}
        width={90}
        height={90}
        className={'mx-auto 2xl:hidden'}
      />
      <span
        className={
          'mt-32 flex flex-col items-center justify-center text-primary 2xl:mt-0'
        }
      >
        {icon}
      </span>
      <h1 className={'mt-[29px] text-2xl font-semibold 2xl:text-5xl'}>
        {title}
      </h1>
      <h3 className={'mt-0.5 text-base font-medium 2xl:mt-2 2xl:text-2xl'}>
        {subtitle}
      </h3>
      <Button className={'mt-10 w-full'} onClick={onButtonClick}>
        {buttonTitle}
      </Button>
    </div>
  )
}

export default AuthSuccessCard
