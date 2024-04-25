import { Meta, StoryObj } from '@storybook/react'
import LoginForm from '@/app/auth/login/login-form'
import ForgotPasswordForm from '@/app/auth/forgot-password/forgot-password-form'
import ChangePasswordForm from '@/app/auth/change-password/change-password-form'

const meta: Meta = {
  title: 'Organisms/AuthCard',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
}
export default meta
type Story = StoryObj<typeof meta>

export const Login: Story = {
  render: () => <LoginForm />,
}

export const ForgotPassword: Story = {
  render: () => <ForgotPasswordForm />,
}

export const ChangePassword: Story = {
  render: () => <ChangePasswordForm />,
}
