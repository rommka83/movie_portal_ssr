import renderer from 'react-test-renderer';
import { FilterGenreCard } from './FilterGenreCard';

describe('проверка FilterGenreCard', () => {
  test('отрисовка FilterGenreCard', () => {
    const component = renderer.create(<FilterGenreCard caption={''} genre={''} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
