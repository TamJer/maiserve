import { Meta, StoryObj } from '@storybook/react'
import { Input } from '@/components/ui/input'

const meta: Meta<typeof Input> = {
  title: 'Atoms/Input',
  component: Input,
  tags: ['autodocs'],
  render: (args) => <Input {...args} />,
  args: {
    placeholder: 'Placeholder',
    disabled: false,
  },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
