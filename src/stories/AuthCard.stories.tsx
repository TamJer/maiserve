import { Meta, StoryObj } from '@storybook/react'
import LoginForm from '@/app/auth/login/login-form'
import AuthSuccessCard from '@/app/auth/components/auth-success-card'
import { MailCheck } from 'lucide-react'

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

export const AuthSuccess: Story = {
  args: {
    title: 'Email successfully sent!',
    subtitle:
      'Please check your email for instructions to reset your password.',
    icon: <MailCheck size={150} strokeWidth={1} />,
    buttonTitle: 'Resend email',
    onButtonClick: () => {},
  },
  render: (args) => (
    <AuthSuccessCard
      title={args.title}
      subtitle={args.subtitle}
      icon={args.icon}
      buttonTitle={args.buttonTitle}
      onButtonClick={args.onButtonClick}
    />
  ),
}
