import { IFilm } from 'shared/types/IFilm';
import { IPerson } from 'shared/types/IPerson';

export type GetMovieResponseData = IFilm;
export type GetMoviesResponseData = {
  docs: IFilm[];
};

export type GetPersonResponseData = IPerson;
export type GetPersonsResponseData = {
  docs: IPerson[];
};
