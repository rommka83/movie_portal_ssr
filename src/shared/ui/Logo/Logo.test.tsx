import renderer from 'react-test-renderer';
import { Logo } from './Logo';

describe('проверка Logo', () => {
  test('отрисовка Logo', () => {
    const component = renderer.create(<Logo />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
