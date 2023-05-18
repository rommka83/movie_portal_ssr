import renderer from 'react-test-renderer';
import { UserPhoto } from './UserPhoto';

describe('проверка UserPhoto', () => {
  test('отрисовка UserPhoto с фотографией', () => {
    const component = renderer.create(<UserPhoto src='/aaa' />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('отрисовка UserPhoto без фотографии', () => {
    const component = renderer.create(<UserPhoto />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
