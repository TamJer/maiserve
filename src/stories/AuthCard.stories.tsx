import { Meta, StoryObj } from '@storybook/react'
import LoginForm from '@/app/auth/login/login-form'

const meta: Meta = {
  title: 'Organism/AuthCard',
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
