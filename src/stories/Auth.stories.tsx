import { Meta, StoryObj } from '@storybook/react'
import LoginPage from '@/app/auth/login/page'
import AuthLayout from '@/app/auth/layout'

const meta: Meta = {
  title: 'Pages/Auth',
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Login: Story = {
  render: () => (
    <AuthLayout>
      <LoginPage />
    </AuthLayout>
  ),
}
