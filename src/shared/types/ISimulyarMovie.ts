export interface ISimulyarMovies {
  id: number | null;
  name: string;
  enName: string | null;
  alternativeName: string | null;
  type: string | null;
  poster: {
    url: string | null;
    previewUrl: string | null;
  };
}
