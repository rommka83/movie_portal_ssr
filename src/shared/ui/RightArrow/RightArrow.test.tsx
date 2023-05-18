import { render, screen } from '@testing-library/react';
import { RightArrow } from './RightArrow';

describe('проверка RightArrow', () => {
  test('стрелка большая и белая', () => {
    render(<RightArrow size='big' color='white' />);
    const btn = screen.getByTestId('RightArrow');
    expect(btn).toMatchSnapshot();
  });
  test('стрелка маленькая и чёрная', () => {
    render(<RightArrow size='small' color='black' />);
    const btn = screen.getByTestId('RightArrow');
    expect(btn).toMatchSnapshot();
  });
});
