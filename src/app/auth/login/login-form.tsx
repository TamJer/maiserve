'use client'
import React from 'react'
import AuthCard from '@/app/auth/components/auth-card'
import { useForm } from 'react-hook-form'
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

  return (
    <Form {...form}>
      <form>
        <AuthCard title={'Login'} subtitle={'Welcome back!'}>
          <div className={'mb-[75px] space-y-9'}>
            <FormField
              name={'email'}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder={'Email'} />
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
                    />
                  </FormControl>
                  <div className={'relative'}>
                    <FormMessage />
                    <p className={'text-sm font-medium text-destructive'}>
                      hello
                    </p>
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
          <Button type={'submit'} className={'w-full'}>
            Login
          </Button>
        </AuthCard>
      </form>
    </Form>
  )
}

export default LoginForm
