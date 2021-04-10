type ChartTypes = (length?: number, max?: number) => number[];
type getRandomIntTypes = (min?: number, max?: number) => number;

// array generator
export const generateChartArray: ChartTypes = (
  length = getRandomInt(),
  maxValue = 200
) => {
  let ChartArray = Array<number>(length)
    .fill(0)
    .map(() => Math.round(Math.random() * maxValue));
  return ChartArray;
};
  
// random number generator of array length
const getRandomInt: getRandomIntTypes = (min=10, max= 50) => {
  const randInt: number =  Math.floor(Math.random() * (max - min + 1)) + min;
  return randInt;
};
