import renderer from 'react-test-renderer';
import { CardTitle } from './CardTitle';

describe('проверка CardTitle', () => {
  test('отрисовка CardTitle', () => {
    const component = renderer.create(
      <CardTitle>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur quod velit rem consequuntur nihil
        ullam, dicta modi nostrum dolore saepe illum provident quae asperiores excepturi possimus, fuga,
        distinctio officia numquam?
      </CardTitle>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
