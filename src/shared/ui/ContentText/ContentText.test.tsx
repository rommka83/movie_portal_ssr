import renderer from 'react-test-renderer';
import { ContentText } from './ContentText';

describe('проверка ContentText', () => {
  test('отрисовка ContentText', () => {
    const component = renderer.create(
      <ContentText>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur quod velit rem consequuntur nihil
        ullam, dicta modi nostrum dolore saepe illum provident quae asperiores excepturi possimus, fuga,
        distinctio officia numquam? Modi quam nihil sit atque vel facilis deserunt maiores maxime sed
        doloribus eos rerum corporis odio quae laudantium officia omnis nobis, hic in explicabo, ipsa
        veritatis ipsum distinctio ipsam! Mollitia? Quibusdam sed debitis, nisi minus dolores mollitia
        voluptatem laboriosam fugiat cumque, est quis? Tenetur ab dicta, repellendus eum, sunt saepe totam
        facere illo non aut explicabo et nulla! Aperiam, amet. Doloremque rem ipsa deleniti et sequi
        accusantium atque quis illo laborum dolore, alias dicta hic voluptas amet suscipit eaque, commodi, ut
        repellat dolorem. Exercitationem corporis ex ea dignissimos veniam quia.
      </ContentText>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
