import { Meta, StoryObj } from '@storybook/react'
import ForgotPasswordPage from '@/app/auth/forgot-password/page'

const meta: Meta = {
  title: 'Pages/Auth',
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Login: Story = {
  render: () => <>Test</>,
}

export const ForgotPassword: Story = {
  render: () => <ForgotPasswordPage />,
}
