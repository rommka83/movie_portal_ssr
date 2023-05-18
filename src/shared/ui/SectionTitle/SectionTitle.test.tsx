import renderer from 'react-test-renderer';
import { SectionTitle } from './SectionTitle';

describe('проверка SectionTitle', () => {
  test('отрисовка SectionTitle', () => {
    const component = renderer.create(
      <SectionTitle>
        <span>Проверка</span>
      </SectionTitle>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
