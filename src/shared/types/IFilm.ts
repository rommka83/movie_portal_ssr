import { IRating } from './IRating';
import { IFact } from './IFact';
import { IPerson } from './IPerson';
import { ISimulyarMovies } from './ISimulyarMovie';
import { IVideo } from './IVideo';

export interface IFilm {
  id: number;
  name: string;
  enName: string | null;
  year: number;
  description: string | null;
  shortDescription: string | null;
  rating: IRating | null;
  movieLength: number;
  ageRating: number | null;
  poster: {
    url: string;
    previewUrl: string;
  } | null;
  videos: IVideo;
  genres: {
    name: string;
  }[];
  countries: {
    name: string;
  }[];
  persons: IPerson[];
  similarMovies: ISimulyarMovies[] | null;
  facts: IFact[] | null;
  alternativeName: string | null;
  // votes: {
  //   kp: number;
  //   imdb: number;
  //   tmdb?: number;
  //   filmCritics: number;
  //   russianFilmCritics: number;
  //   await: number;
  // };
  // slogan: string | null;
  // status: string | null;
  // type: string;
  // ratingMpaa: string | null;
  // reviewInfo: {
  //   count: number;
  //   positiveCount: number;
  //   percentage: string;
  // } | null;
  // seasonsInfo: [
  //   {
  //     number: number;
  //     episodesCount: number;
  //   }
  // ];
  // budget: {
  //   value: number;
  //   currency: string;
  // };
  // fees: {
  //   world: {
  //     value: number;
  //     currency: string;
  //   };
  //   russia: {
  //     value: number;
  //     currency: string;
  //   };
  //   usa: {
  //     value: number;
  //     currency: string;
  //   };
  // };
  // premiere: {
  //   country: string;
  //   world: string;
  //   russia: string;
  //   digital: string;
  //   cinema: string;
  //   bluray: string;
  //   dvd: string;
  // };
  // logo: {
  //   url: string | null;
  // };
  // typeNumber: number;
  // externalId: {
  //   kpHD: string | null;
  //   imdb: string;
  //   tmdb: number;
  // };
  // names:
  //   | {
  //       name: string;
  //       language: string;
  //       type: string;
  //     }[]
  //   | { name: string }[];
  // backdrop: {
  //   url: string;
  //   previewUrl: string;
  // };
  // sequelsAndPrequels: [
  //   {
  //     id: number;
  //     name: string;
  //     enName: string;
  //     alternativeName: string;
  //     type: string;
  //     poster: {
  //       url: string;
  //       previewUrl: string;
  //     };
  //   }
  // ];
  // watchability: {
  //   items: [
  //     {
  //       name: string;
  //       logo: {
  //         url: string;
  //       };
  //       url: string;
  //     }
  //   ];
  // };
  // releaseYears: [
  //   {
  //     start: number;
  //     end: number;
  //   }
  // ];
  // top10: number | null;
  // top250: number | null;
  // imagesInfo: {
  //   postersCount: number;
  //   backdropsCount: number;
  //   framesCount: number;
  // };
  // productionCompanies: [
  //   {
  //     name: string;
  //     url: string;
  //     previewUrl: string;
  //   }
  // ];
}
