import renderer from 'react-test-renderer';
import { PersonMiniCard } from './PersonMiniCard';

const person = {
  id: 1,
  photo: '',
  name: 'string',
  enName: 'string',
  description: 'string',
  profession: 'string',
  enProfession: 'string',
};

describe('проверка PersonMiniCard', () => {
  test('отрисовка PersonMiniCard ', () => {
    const component = renderer.create(<PersonMiniCard person={person} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
