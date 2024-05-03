'use client'

import React from 'react'
import AuthSuccessCard from '@/app/auth/components/auth-success-card'
import { MailCheck } from 'lucide-react'

const SuccessEmail = () => {
  const resendEmail = () => {
    return <></>
  }
  return (
    <div>
      <AuthSuccessCard
        title={'Email successfully sent!'}
        subtitle={
          'Please check your email  for instructions to reset your password.'
        }
        icon={<MailCheck />}
        buttonTitle={'Resend Email'}
        onButtonClick={resendEmail}
      />
    </div>
  )
}

export default SuccessEmail
