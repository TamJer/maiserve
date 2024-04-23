import { Button } from '@/components/ui/button'
import { Meta, type StoryObj } from '@storybook/react'

const meta: Meta<typeof Button> = {
  component: Button,
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  render: () => <Button>hello</Button>,
}
