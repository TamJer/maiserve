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
        'w-full min-w-[504px] space-y-[75px] rounded border border-border bg-card px-12 py-14'
      }
    >
      <div className={'space-y-1.5'}>
        <h1 className={'text-5xl font-semibold'}>{title}</h1>
        <h3 className={'Welcome back! text-4xl font-semibold'}>{subtitle}</h3>
      </div>
      <div>{children}</div>
    </div>
  )
}

export default AuthCard
