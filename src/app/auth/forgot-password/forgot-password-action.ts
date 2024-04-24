'use server'
import { createServerClient } from '@/utils/supabase'
import { cookies } from 'next/headers'
import { z } from 'zod'
import ForgotPasswordSchema from '@/app/auth/forgot-password/forgot-password-schema'
import { redirect } from 'next/navigation'

const forgotPasswordAction = async (
  formData: z.infer<typeof ForgotPasswordSchema>,
) => {
  const supabase = createServerClient(cookies())

  const { error } = await supabase.auth.resetPasswordForEmail(formData.email, {
    redirectTo: `${process.env.NEXT_PUBLIC_BASE_URL}/reset-password`,
  })

  if (error) {
    redirect('/forgot-password?message=Could not reset password')
  }

  redirect('/forgot-password?message=Password reset email sent')
}

export default forgotPasswordAction
