import React from 'react'
import LoginForm from '@/app/auth/login/login-form'
import VectorBackground from '@/app/auth/components/vector-background'

const LoginPage = () => {
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
        <LoginForm />
      </div>
    </div>
  )
}

export default LoginPage
