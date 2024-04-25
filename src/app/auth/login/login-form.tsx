'use client'
import React, { FC, useTransition } from 'react'
import AuthCard from '@/app/auth/components/auth-card'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'
import LoginSchema from '@/app/auth/login/login-schema'
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
import Link from 'next/link'
import loginAction from '@/app/auth/login/login-action'

interface Props {
  message?: string
}

const LoginForm: FC<Props> = ({ message }) => {
  const [isPending, startTransition] = useTransition()
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit: SubmitHandler<z.infer<typeof LoginSchema>> = (data) => {
    startTransition(() => loginAction(data))
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={'flex max-h-screen flex-col items-center justify-center'}
      >
        <AuthCard title={'Login'} subtitle={'Welcome back!'}>
          <p className={'mb-4 text-sm text-destructive'}>{message}</p>
          <div className={'space-y-9'}>
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
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
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
                      aria-label={'password'}
                      disabled={isPending}
                    />
                  </FormControl>
                  <div className={'relative'}>
                    <FormMessage />
                    <Link
                      href={'/forgot-password'}
                      className={'absolute right-0 top-1 text-xs font-medium'}
                    >
                      Forgot Password?
                    </Link>
                  </div>
                </FormItem>
              )}
            />
          </div>
          <Button
            type={'submit'}
            className={'mt-12 w-full'}
            isLoading={isPending}
          >
            Login
          </Button>
        </AuthCard>
      </form>
    </Form>
  )
}

export default LoginForm
