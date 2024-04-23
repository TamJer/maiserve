import React, { FC } from 'react'
import { cn } from '@/utils/tailwind'

interface Props {
  className?: string
}

const VectorBackground: FC<Props> = ({ className }) => {
  return (
    <div className={cn(className, 'relative h-[1501.59px] w-[1217.42px]')}>
      <div className="absolute left-[708.58px] top-[830.79px] h-[206px] w-[733.17px] origin-top-left rotate-[46.05deg] bg-orange-500" />
      <div className="absolute left-[168.56px] top-[485.56px] h-[146.14px] w-[456.96px] origin-top-left rotate-[46.05deg] bg-orange-300" />
      <div className="absolute left-[170.07px] top-[916px] h-[236.23px] w-[548.20px] origin-top-left rotate-[46.05deg] bg-orange-500" />
      <div className="absolute left-[331.31px] top-0 h-[206px] w-[889.69px] origin-top-left rotate-[46.05deg] bg-orange-500" />
    </div>
  )
}

export default VectorBackground
