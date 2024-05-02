import React, { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const AdminLayout: FC<Props> = ({ children }) => {
  return <div>{children}</div>
}

export default AdminLayout
