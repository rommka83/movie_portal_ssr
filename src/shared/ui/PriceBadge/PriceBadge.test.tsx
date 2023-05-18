import renderer from 'react-test-renderer';
import { PriceBadge } from './PriceBadge';

describe('проверка PriceBadge', () => {
  test('бесплатно', () => {
    const component = renderer.create(<PriceBadge price={false} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('подписка', () => {
    const component = renderer.create(<PriceBadge price />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
