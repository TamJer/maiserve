import React, { FC, ReactNode } from 'react'
import Logo from '@/assets/images/logo.svg'
import Image from 'next/image'

interface Props {
  title: string
  subtitle: string
  children: ReactNode
}

const AuthCard: FC<Props> = ({ title, subtitle, children }) => {
  return (
    <div
      className={
        'w-screen max-w-[322px] border-border py-14 2xl:min-w-[504px] 2xl:space-y-[75px] 2xl:rounded 2xl:border 2xl:bg-card 2xl:px-12'
      }
    >
      <Image
        src={Logo}
        alt={'MaiServe'}
        width={90}
        height={90}
        className={'mx-auto'}
      />
      <div className={'mt-28 space-y-9'}>
        <div className={'space-y-0.5'}>
          <h1 className={'text-3xl font-semibold 2xl:text-5xl'}>{title}</h1>
          <h3
            className={
              'Welcome back! 2x:text-4xl text-base font-medium 2xl:font-semibold'
            }
          >
            {subtitle}
          </h3>
        </div>
        <div>{children}</div>
      </div>
    </div>
  )
}

export default AuthCard
