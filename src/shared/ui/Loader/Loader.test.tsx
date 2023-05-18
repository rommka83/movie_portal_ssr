import renderer from 'react-test-renderer';
import { Loader } from './Loader';

describe('проверка Loader', () => {
  test('отрисовка Loader', () => {
    const component = renderer.create(<Loader />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
