'use client'

import React from 'react'
import { useForm } from 'react-hook-form'
import ResetSchema from '@/app/auth/reset-password/reset-password-schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import AuthCard from '@/app/auth/components/auth-card'
import Link from 'next/link'

export function ResetForm() {
  const form = useForm<z.infer<typeof ResetSchema>>({
    resolver: zodResolver(ResetSchema),
    defaultValues: {
      email: '',
    },
  })

  function onSubmit(values: z.infer<typeof ResetSchema>) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={'flex max-h-screen flex-col items-center justify-center'}
      >
        <AuthCard title={'Forgot Password'} subtitle={'Reset your password.'}>
          <div className={'my-9 space-y-9 2xl:my-24'}>
            <FormField
              control={form.control}
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
                    />
                  </FormControl>
                  <div className={'relative'}>
                    <FormMessage />
                    <Link
                      href={'./login'}
                      className={'absolute right-0 top-1 text-xs font-medium'}
                    >
                      Go back to login.
                    </Link>
                  </div>
                </FormItem>
              )}
            />
          </div>
          <Button type={'submit'} className={'mt-24 w-full'}>
            <Link href={'./success-card'}>Send Email</Link>
          </Button>
        </AuthCard>
      </form>
    </Form>
  )
}

export default ResetForm
