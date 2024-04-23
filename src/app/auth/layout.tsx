import React, { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const AuthLayout: FC<Props> = ({ children }: { children: ReactNode }) => {
  return <div className={'max-h-screen w-full overflow-hidden'}>{children}</div>
}

export default AuthLayout
