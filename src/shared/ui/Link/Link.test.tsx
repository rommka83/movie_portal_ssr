import renderer from 'react-test-renderer';
import { Link } from './MyLink';

describe('проверка Link', () => {
  test('отрисовка Link', () => {
    const component = renderer.create(<Link to='/CatalogPage/биография' />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
