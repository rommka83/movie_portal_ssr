import renderer from 'react-test-renderer';
import { ReitingMovie } from './ReitingMovie';

describe('проверка ReitingMovie', () => {
  test('отрисовка ReitingMovie ', () => {
    const component = renderer.create(<ReitingMovie grade={10} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
