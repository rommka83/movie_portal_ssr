import renderer from 'react-test-renderer';
import { InputSearch } from './InputSearch';

describe('проверка InputSearch', () => {
  test('отрисовка InputSearch', () => {
    const component = renderer.create(
      <InputSearch
        placeholderText='Проверка'
        onChange={function (value: string): void {
          throw new Error('Function not implemented.');
        }}
        searchValue={''}
        onSearchClick={function (): void {
          throw new Error('Function not implemented.');
        }}
      />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
