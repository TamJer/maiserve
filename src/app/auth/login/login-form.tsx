'use client'
import React from 'react'
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

const LoginForm = () => {
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onLogin: SubmitHandler<z.infer<typeof LoginSchema>> = ({
    email,
    password,
  }) => {
    console.log(email, password)
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onLogin)}
        className={'flex max-h-screen flex-col items-center justify-center'}
      >
        <AuthCard title={'Login'} subtitle={'Welcome back!'}>
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
          <Button type={'submit'} className={'mt-12 w-full'}>
            Login
          </Button>
        </AuthCard>
      </form>
    </Form>
  )
}

export default LoginForm
