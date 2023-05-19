import renderer from 'react-test-renderer';
import { ShortDescription } from './ShortDescription';

const film = {
  id: 0,
  name: '',
  enName: null,
  year: 0,
  description: null,
  shortDescription: null,
  rating: null,
  movieLength: 0,
  ageRating: null,
  poster: {
    url: '',
    previewUrl: '',
  },
  videos: {
    trailers: [],
    teasers: [],
  },
  genres: [{ name: 'sss' }],
  countries: [],
  persons: [],
  similarMovies: null,
  facts: null,
  alternativeName: null,
};

describe('проверка ShortDescription', () => {
  test('отрисовка ShortDescription ', () => {
    const component = renderer.create(<ShortDescription obj={film} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
