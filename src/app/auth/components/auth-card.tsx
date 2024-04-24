import React, { FC, ReactNode } from 'react'

interface Props {
  title: string
  subtitle: string
  children: ReactNode
}

const AuthCard: FC<Props> = ({ title, subtitle, children }) => {
  return (
    <div
      className={
        'w-full min-w-[504px] rounded border border-border bg-card px-12 py-14 2xl:space-y-[75px]'
      }
    >
      <div className={'space-y-1.5 '}>
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
  )
}

export default AuthCard
