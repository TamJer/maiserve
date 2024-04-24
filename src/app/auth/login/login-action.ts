'use server'
import { z } from 'zod'
import LoginSchema from '@/app/auth/login/login-schema'
import { createServerClient } from '@/utils/supabase'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

const loginAction = async (formData: z.infer<typeof LoginSchema>) => {
  const supabase = createServerClient(cookies())

  const { error } = await supabase.auth.signInWithPassword({
    email: formData.email,
    password: formData.password,
  })

  if (error) {
    redirect('/auth/login?message=Could not authenticate user')
  }

  redirect('/')
}
export default loginAction
