import { Button } from '@/components/ui/button'
import { Meta, type StoryObj } from '@storybook/react'

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  render: (args) => <Button {...args}>hello</Button>,
  args: {
    isLoading: false,
    content: 'Button',
    disabled: false,
    size: 'default',
  },
  argTypes: {
    size: {
      options: ['default', 'sm', 'lg', 'icon'],
      control: { type: 'select' },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Button
      variant={'default'}
      isLoading={args.isLoading}
      disabled={args.disabled}
      size={args.size}
    >
      {args.content}
    </Button>
  ),
}

export const Secondary: Story = {
  render: (args) => (
    <Button
      variant={'secondary'}
      isLoading={args.isLoading}
      disabled={args.disabled}
      size={args.size}
    >
      {args.content}
    </Button>
  ),
}

export const Destructive: Story = {
  render: (args) => (
    <Button
      variant={'destructive'}
      isLoading={args.isLoading}
      disabled={args.disabled}
      size={args.size}
    >
      {args.content}
    </Button>
  ),
}

export const Outline: Story = {
  render: (args) => (
    <Button
      variant={'outline'}
      isLoading={args.isLoading}
      disabled={args.disabled}
      size={args.size}
    >
      {args.content}
    </Button>
  ),
}
