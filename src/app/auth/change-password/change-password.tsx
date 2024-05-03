'use client'

import ChangePasswordSchema from '@/app/auth/change-password/change-password-schema'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import AuthCard from '@/app/auth/components/auth-card'
import Link from 'next/link'

export function ChangePasswordForm() {
  const form = useForm<z.infer<typeof ChangePasswordSchema>>({
    resolver: zodResolver(ChangePasswordSchema),
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  })

  function onSubmit(values: z.infer<typeof ChangePasswordSchema>) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={'flex max-h-screen flex-col items-center justify-center'}
      >
        <AuthCard
          title={'Change Password'}
          subtitle={'Enter your new password.'}
        >
          <div className={'space-y-9'}>
            <FormField
              name={'password'}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder={'Password'}
                      type={'password'}
                      aria-label={'Password'}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name={'confirmPassword'}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder={'Confirm Password'}
                      type={'password'}
                      aria-label={'Confirm Password'}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type={'submit'} className={'mt-40 w-full 2xl:mt-28'}>
            Login
          </Button>
        </AuthCard>
      </form>
    </Form>
  )
}

export default ChangePasswordForm
