export const getTrailerId = (url: string) => {
  const regexp = /https:\/\/www\.youtube\.com\/embed\/([a-zA-Z0-9_-]+)/i;
  return url.match(regexp)?.[1];
};
