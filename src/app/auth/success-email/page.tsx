import React from 'react'
import TopSuccessBackground from '@/app/auth/components/vector-topsuccess-background'
import BottomSuccessBackground from '@/app/auth/components/vector-bottomsuccess-background'
import SuccessEmail from '@/app/auth/success-email/success-email'

const SuccessPage = () => {
  return (
    <div>
      <TopSuccessBackground className={'-left-10 -top-[545px]'} />
      <BottomSuccessBackground className={'-top-[260px] left-72'} />
      <div
        className={
          'align-center absolute top-52 z-0 flex w-full flex-row justify-center'
        }
      >
        <SuccessEmail />
      </div>
    </div>
  )
}

export default SuccessPage
