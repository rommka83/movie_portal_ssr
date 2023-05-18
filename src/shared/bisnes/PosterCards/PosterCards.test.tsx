import renderer from 'react-test-renderer';
import { PosterCards } from './PosterCards';

describe('проверка PosterCards', () => {
  test('отрисовка PosterCards ', () => {
    const component = renderer.create(<PosterCards src={''} name={''} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
