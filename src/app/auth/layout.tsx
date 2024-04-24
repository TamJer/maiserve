import React, { FC, ReactNode } from 'react'
import { isUserLoggedIn } from '@/utils/auth-checks'
import { createServerClient } from '@/utils/supabase'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

interface Props {
  children: ReactNode
}

const AuthLayout: FC<Props> = async ({ children }: { children: ReactNode }) => {
  // check if user is already logged in
  const supabase = createServerClient(cookies())
  if (await isUserLoggedIn(supabase)) {
    // redirect to dashboard if user is already logged in
    redirect('/')
  }
  return <div className={'max-h-screen w-full overflow-hidden'}>{children}</div>
}

export default AuthLayout
