import React from 'react'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import ResetPasswordSchema from '@/app/auth/forgot-password/forgot-password-schema'
import { zodResolver } from '@hookform/resolvers/zod'
import AuthCard from '@/app/auth/components/auth-card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const ForgotPasswordForm = () => {
  const form = useForm<z.infer<typeof ResetPasswordSchema>>({
    resolver: zodResolver(ResetPasswordSchema),
    defaultValues: {
      email: '',
    },
  })

  return (
    <Form {...form}>
      <form>
        <AuthCard title={'Forgot Password'} subtitle={'Reset your password.'}>
          <FormField
            name={'email'}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder={'Email'}
                    type={'text'}
                    aria-label={'email'}
                    // disabled={isPending}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type={'submit'}
            className={'mt-12 w-full'}
            // isLoading={isPending}
          >
            Reset
          </Button>
        </AuthCard>
      </form>
    </Form>
  )
}

export default ForgotPasswordForm
