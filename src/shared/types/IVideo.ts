export interface IVideo {
  trailers: {
    url: string;
    name: string;
    site?: string;
    type?: string;
    size?: number;
  }[];
  teasers: {
    url: string;
    name: string;
    site?: string;
    type?: string;
    size?: number;
  }[];
}
