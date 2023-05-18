import renderer from 'react-test-renderer';
import { ExpandableBlock } from './ExpandableBlock';

describe('проверка ExpandableBlock', () => {
  test('отрисовка ExpandableBlock', () => {
    const component = renderer.create(<ExpandableBlock text='Проверка' />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
