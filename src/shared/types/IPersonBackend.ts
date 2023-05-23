import { IActorFilms } from './IActorFilms';

export interface IPersonBackend {
  id: number;
  name: string | null;
  enName: string | null;
  photo: string | null;
  sex: string | null;
  growth: number | null;
  birthday: string | null;
  death: string | null;
  age: number | null;
  birthPlace:
    | [
        {
          value: string;
        },
      ]
    | null;
  deathPlace:
    | [
        {
          value: string;
        },
      ]
    | null;
  spouses:
    | {
        id: number;
        name: string;
        divorced: boolean;
        divorcedReason: string;
        sex: string;
        children: number;
        relation: string;
      }[]
    | [];
  countAwards: number | null;
  profession: [
    {
      value: string;
    },
  ];
  facts:
    | [
        {
          value: string;
        },
      ]
    | [];
  movies: IActorFilms[];
}
