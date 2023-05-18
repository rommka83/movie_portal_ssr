import renderer from 'react-test-renderer';
import { OutputWindow } from './OutputWindow';

describe('проверка OutputWindow', () => {
  test('отрисовка OutputWindow с фотографией', () => {
    const component = renderer.create(<OutputWindow />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
