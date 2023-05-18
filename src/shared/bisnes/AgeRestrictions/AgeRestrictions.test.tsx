import renderer from 'react-test-renderer';
import { AgeRestrictions } from './AgeRestrictions';

describe('проверка AgeRestrictions', () => {
  test('отрисовка AgeRestrictions ', () => {
    const component = renderer.create(<AgeRestrictions age={22} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
