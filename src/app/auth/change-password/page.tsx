import React from 'react'
import VectorBackground from '@/app/auth/components/vector-background'
import ChangePasswordForm from '@/app/auth/change-password/change-password'

const Page = () => {
  return (
    <div className={'flex flex-row justify-between'}>
      <VectorBackground
        className={'absolute -left-56 bottom-64 hidden 2xl:block'}
      />
      <div
        className={
          'flex h-screen w-full flex-col items-center justify-center 2xl:w-1/3 2xl:pr-14 '
        }
      >
        <ChangePasswordForm />
      </div>
    </div>
  )
}

export default Page
