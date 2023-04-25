import { IOneComment } from './IOneComment';

export interface IReviev {
  docs: IOneComment[];
  total: number;
  limit: number;
  page: number;
  pages: number;
}
