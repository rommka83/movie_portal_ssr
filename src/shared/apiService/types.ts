import { IFilm } from 'shared/types/IFilm';
import { IOneComment } from 'shared/types/IOneComment';
import { IPerson } from 'shared/types/IPerson';

export type GetMovieResponseData = IFilm;
export type GetMoviesResponseData = {
  docs: IFilm[];
};

export type GetPersonResponseData = IPerson;
export type GetPersonsResponseData = {
  docs: IPerson[];
};

export type GetCommentsResponseData = {
  docs: IOneComment[];
  total: number;
  limit: number;
  page: number;
  pages: number;
};
