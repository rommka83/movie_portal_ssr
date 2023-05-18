import { SvgIcon } from './SvgIcon';
import renderer from 'react-test-renderer';

describe('проверка SvgIcon', () => {
  test('отрисовка Google', () => {
    const component = renderer.create(<SvgIcon type='Google' size={50} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('отрисовка AppleLogo', () => {
    const component = renderer.create(<SvgIcon type='AppleLogo' size={50} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('отрисовка VK', () => {
    const component = renderer.create(<SvgIcon type='VK' size={50} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('отрисовка OK', () => {
    const component = renderer.create(<SvgIcon type='OK' size={50} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('отрисовка Twitter', () => {
    const component = renderer.create(<SvgIcon type='Twitter' size={50} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('отрисовка Viber', () => {
    const component = renderer.create(<SvgIcon type='Viber' size={50} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('отрисовка Linkedin', () => {
    const component = renderer.create(<SvgIcon type='Linkedin' size={50} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('отрисовка Telegram', () => {
    const component = renderer.create(<SvgIcon type='Telegram' size={50} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('отрисовка winamp', () => {
    const component = renderer.create(<SvgIcon type='winamp' size={50} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('отрисовка padarka', () => {
    const component = renderer.create(<SvgIcon type='padarka' size={50} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('отрисовка top', () => {
    const component = renderer.create(<SvgIcon type='top' size={50} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('отрисовка number1', () => {
    const component = renderer.create(<SvgIcon type='number1' size={50} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('отрисовка number2', () => {
    const component = renderer.create(<SvgIcon type='number2' size={50} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('отрисовка number3', () => {
    const component = renderer.create(<SvgIcon type='number3' size={50} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('отрисовка number4', () => {
    const component = renderer.create(<SvgIcon type='number4' size={50} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('отрисовка number5', () => {
    const component = renderer.create(<SvgIcon type='number5' size={50} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('отрисовка number6', () => {
    const component = renderer.create(<SvgIcon type='number6' size={50} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('отрисовка number7', () => {
    const component = renderer.create(<SvgIcon type='number7' size={50} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('отрисовка number8', () => {
    const component = renderer.create(<SvgIcon type='number8' size={50} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('отрисовка number9', () => {
    const component = renderer.create(<SvgIcon type='number9' size={50} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('отрисовка number0', () => {
    const component = renderer.create(<SvgIcon type='number0' size={50} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
