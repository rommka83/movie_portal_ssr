import type { Meta, StoryObj } from '@storybook/react';

import { SvgIcon } from '../shared/ui/SvgIcon';

const meta = {
  title: 'Example/SvgIcon',
  component: SvgIcon,
  tags: ['autodocs'],
  args: { type: 'Bookmark' || 'Magic' || 'Star' || 'DashCircle', size: 20 },

  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof SvgIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Restrictions: Story = {};
