import { Meta, StoryObj } from '@storybook/react'
import VectorBackground from '@/app/auth/components/vector-background'
import TopSuccessBackground from '@/app/auth/components/vector-topsuccess-background'
import BottomSuccessBackground from '@/app/auth/components/vector-bottomsuccess-background'

const meta: Meta = {
  title: 'Atoms/AuthVectors',
  parameters: {
    layout: 'centered',
  },
  render: () => <VectorBackground />,
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Top: Story = {
  render: () => <TopSuccessBackground />,
}

export const Bottom: Story = {
  render: () => <BottomSuccessBackground />,
}
