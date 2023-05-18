import renderer from 'react-test-renderer';
import { ButtonOrLink } from './ButtonOrLink';

describe('проверка ButtonOrLink', () => {
  test('отрисовка ButtonOrLink primary, круглой', () => {
    const component = renderer.create(
      <ButtonOrLink variant='primary' round>
        Lorem ipsum dolor
      </ButtonOrLink>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('отрисовка ButtonOrLink secondary, большой', () => {
    const component = renderer.create(
      <ButtonOrLink variant='secondary' large>
        Lorem ipsum dolor
      </ButtonOrLink>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('отрисовка ButtonOrLink прозрачной, маленькой', () => {
    const component = renderer.create(
      <ButtonOrLink transparent small>
        Lorem ipsum dolor
      </ButtonOrLink>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
