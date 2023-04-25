import type { Meta, StoryObj } from '@storybook/react';
import { ContentText } from '../shared/ui/ContentText';

const meta = {
  title: 'Example/ContentText',
  component: ContentText,
  tags: ['autodocs'],
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis vitae culpa qui cum, magni consequuntur eaque rem libero possimus in et quisquam nemo natus expedita repellendus reprehenderit inventore iusto dignissimos. Ipsum facere error aut culpa aperiam reiciendis voluptates eaque dolorum. Ea veritatis eligendi culpa consequatur sint eveniet odio, vitae recusandae obcaecati, necessitatibus delectus repellat blanditiis minus ratione nisi ipsum exercitationem. Iure cupiditate ipsam sequi dolore maiores eius culpa optio quos voluptatum nulla nobis aspernatur ut quibusdam error, ipsum ipsa itaque. Saepe autem magni eum voluptatibus ducimus modi possimus officia commodi. Eveniet qui tempora at quia numquam pariatur. Totam voluptatum quod distinctio et repellat quisquam quae nemo, laborum consequuntur ipsam pariatur in accusantium nam tenetur eligendi nisi. Accusantium omnis harum quis. Voluptas ab libero repellendus dolor molestias quis amet quae, porro est nobis adipisci expedita eum id asperiores delectus quas tempora. Cupiditate doloribus modi saepe quaerat officia vitae, iusto iste veritatis',
  },

  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ContentText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Restrictions: Story = {};
