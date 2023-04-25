import { render, screen } from '@testing-library/react';
import { RightArrow } from './RightArrow';

test('проверка стрелки от слайдеров', () => {
  render(<RightArrow size='big' />);

  const btn = screen.getByTestId('RightArrow');
  expect(btn).toMatchSnapshot();
});
