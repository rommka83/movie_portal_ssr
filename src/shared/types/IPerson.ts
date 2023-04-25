export interface IPerson {
  id: number;
  photo: string;
  name: string | null;
  enName: string | null;
  description?: string | null;
  profession: string;
  enProfession: string;
}
