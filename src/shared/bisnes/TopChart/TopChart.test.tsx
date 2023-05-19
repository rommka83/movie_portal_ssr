import renderer from 'react-test-renderer';
import { TopChart } from './TopChart';

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
  genres: [],
  countries: [],
  persons: [],
  similarMovies: null,
  facts: null,
  alternativeName: null,
};

describe('проверка TopChart', () => {
  test('отрисовка TopChart ', () => {
    const component = renderer.create(<TopChart obj={film}></TopChart>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
