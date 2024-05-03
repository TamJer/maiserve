import React, { FC } from 'react'
import { cn } from '@/utils/tailwind'

interface Props {
  className?: string
}

const BottomSuccessBackground: FC<Props> = ({ className }) => {
  return (
    <div
      className={cn(
        className,
        'relative h-[884.79px] w-[1636.33px] origin-top-left rotate-180',
      )}
    >
      <div className="absolute left-[-738.21px] top-[-411px] h-[146.14px] w-[517.21px] origin-top-left rotate-[-133.95deg] bg-orange-300"></div>
      <div className="absolute left-[-148.31px] top-[-58px] h-[206px] w-[889.69px] origin-top-left rotate-[-133.95deg] bg-orange-400"></div>
      <div className="absolute left-[-704.07px] top-0 h-[236.23px] w-[776.65px] origin-top-left rotate-[-133.95deg] bg-orange-400"></div>
      <div className="absolute left-[-1165.31px] top-[-150px] h-[206px] w-[678.68px] origin-top-left rotate-[-133.95deg] bg-orange-500"></div>
    </div>
  )
}

export default BottomSuccessBackground
