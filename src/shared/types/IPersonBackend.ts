import { IActorFilms } from './IActorFilms';

export interface IPersonBackend {
  id: number;
  name: string;
  enName: string;
  photo: string;
  sex: string;
  growth: number;
  birthday: string;
  death: string;
  age: number;
  birthPlace: [
    {
      value: string;
    },
  ];
  deathPlace: [
    {
      value: string;
    },
  ];
  spouses: {
    id: number;
    name: string;
    divorced: boolean;
    divorcedReason: string;
    sex: string;
    children: number;
    relation: string;
  };
  countAwards: number;
  profession: [
    {
      value: string;
    },
  ];
  facts: [
    {
      value: string;
    },
  ];
  movies: IActorFilms[];
}
