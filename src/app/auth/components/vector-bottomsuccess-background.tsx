import React, { FC } from 'react'
import { cn } from '@/utils/tailwind'

interface Props {
  className?: string
}

const BottomSuccessBackground: FC<Props> = ({ className }) => {
  return (
    <div className={cn(className, 'relative h-[884.79px] w-[1636.33px]')}>
      <div className="absolute left-[471.02px] top-[734.79px] h-[206.90px] w-[678.68px] origin-top-left rotate-[-133.95deg] bg-orange-500" />
      <div className="absolute left-[898.11px] top-[473.79px] h-[146.14px] w-[517.21px] origin-top-left rotate-[-133.95deg] bg-orange-300" />
      <div className="absolute left-[932.25px] top-[884.79px] h-[236.23px] w-[776.65px] origin-top-left rotate-[-133.95deg] bg-orange-400" />
      <div className="absolute left-[1488.02px] top-[826.79px] h-[206px] w-[889.69px] origin-top-left rotate-[-133.95deg] bg-orange-400" />
    </div>
  )
}

export default BottomSuccessBackground
