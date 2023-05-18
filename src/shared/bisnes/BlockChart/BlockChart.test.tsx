import renderer from 'react-test-renderer';
import { BlockChart } from './BlockChart';

describe('проверка BlockChart', () => {
  test('отрисовка BlockChart ', () => {
    const component = renderer.create(
      <BlockChart
        width={0}
        obj={{
          await: 0,
          filmCritics: 0,
          imdb: 0,
          russianFilmCritics: 0,
        }}
      />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
