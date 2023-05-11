const declension = (int: number, word: string) => {
  const str = String(int);
  const arr = [];
  for (let i = 0; i < str.length; i++) {
    arr.push(str.charAt(i));
  }

  const endPosition = arr[arr.length - 1];
  const penultimatePosition = arr[arr.length - 2];

  if (+endPosition == 1 && +penultimatePosition != 1) {
    return `${int} ${word}`;
  }
  if (+endPosition == 0 || (+endPosition >= 5 && +endPosition <= 9) || +penultimatePosition == 1) {
    return `${int} ${word}ов`;
  }
  if (+endPosition >= 2 && +endPosition <= 4 && +penultimatePosition != 1) {
    return `${int} ${word}а`;
  }
};

export default declension;
