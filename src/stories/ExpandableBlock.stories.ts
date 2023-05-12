import type { Meta, StoryObj } from '@storybook/react';
import { ExpandableBlock } from 'shared/ui/ExpandableBlock';

const meta = {
  title: 'Example/ExpandableBlock',
  component: ExpandableBlock,
  tags: ['autodocs'],

  args: {
    text: 'Каждый день миллионы людей ищут фильмы онлайн, и никто не хочет усложнять себе жизнь – и вы наверняка один из них! А раз так, то Иви – это именно тот ресурс, который вам нужен. От лучших кинолент в HD-качестве вас отделяет буквально один клик. Мы не просто освобождаем от необходимости идти в кинотеатр или изучать программу телепередач – у посетителей нашего ресурса гораздо больше возможностей. Видеотека Иви – это постоянно пополняющаяся коллекция в рунете, которая насчитывает более 60 тысяч отечественного и зарубежного контента, доступного для просмотра онлайн. Мы первыми в России подписали контракты с крупнейшими голливудскими студиями (Walt Disney, Warner Bros., Sony, 20th Century Fox, Universal, Paramount, MGM и другими) и на постоянной основе сотрудничаем с крупнейшими российскими компаниями и телеканалами.',
  },

  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ExpandableBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ExpandableBlockEl: Story = {};
