import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from 'shared/ui/Accordion';

const meta = {
  title: 'Example/Accordion',
  component: Accordion,
  tags: ['autodocs'],

  args: {
    textButton: 'Текст заголовка',
    children: (
      <ul>
        <li>Элемент списка</li>
        <li>Элемент списка</li>
        <li>Элемент списка</li>
        <li>Элемент списка</li>
      </ul>
    ),
  },

  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AccordionEl: Story = {};
