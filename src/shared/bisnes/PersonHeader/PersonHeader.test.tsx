import renderer from 'react-test-renderer';
import { PersonHeader } from './PersonHeader';

describe('проверка PersonHeader', () => {
  test('отрисовка PersonHeader ', () => {
    const component = renderer.create(<PersonHeader photo={''} name={''} enName={''} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
