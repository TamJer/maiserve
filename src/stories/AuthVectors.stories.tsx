import { Meta, StoryObj } from '@storybook/react'
import VectorBackground from '@/app/auth/components/vector-background'

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
