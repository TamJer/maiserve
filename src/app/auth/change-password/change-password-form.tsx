import React, { useTransition } from 'react'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { useForm } from 'react-hook-form'
import AuthCard from '@/app/auth/components/auth-card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const ChangePasswordForm = () => {
  const [isPending, startTransition] = useTransition()
  const form = useForm()
  return (
    <Form {...form}>
      <form>
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
                      placeholder={'Email'}
                      type={'password'}
                      aria-label={'email'}
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name={'passwordConfirmation'}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder={'Email'}
                      type={'password'}
                      aria-label={'email'}
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type={'submit'} className={'mt-12 w-full'}>
            Reset
          </Button>
        </AuthCard>
      </form>
    </Form>
  )
}

export default ChangePasswordForm
