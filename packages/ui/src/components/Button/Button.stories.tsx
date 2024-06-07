import { Button } from "./Button";
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: Button,
  args: {
    children: 'Button'
  }
} satisfies Meta<typeof Button>

export default meta;
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => {
    return <>
      <Button variant="primary" {...args} />
    </>
  }
}
