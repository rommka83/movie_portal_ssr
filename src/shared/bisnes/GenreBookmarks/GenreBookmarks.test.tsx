import renderer from 'react-test-renderer';
import { GenreBookmarks } from './GenreBookmarks';

describe('проверка GenreBookmarks', () => {
  test('отрисовка GenreBookmarks ', () => {
    const component = renderer.create(<GenreBookmarks ganre={[{ name: 'string' }]} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
