//types
import { StateTypes } from '../../App';
type ChartTypes = (length?: number, max?: number) => number[];
type getRandomIntTypes = (min?: number, max?: number) => number;
type isEqualArraysTypes = (arr1: number[], arr2: number[]) => boolean;

export const initState = (): StateTypes => {
  return {
    isFinished: false,
    IsRunning: false,
    chartArray: generateChartArray(),
  };
};

// array generator
const generateChartArray: ChartTypes = (
  length = getRandomInt(),
  maxValue = 200
) => {
  let chartArray = Array<number>(length)
    .fill(0)
    .map(() => Math.round(Math.random() * maxValue));
  return chartArray;
};

// random number generator
const getRandomInt: getRandomIntTypes = (min = 15, max = 50) => {
  const randInt: number = Math.floor(Math.random() * (max - min + 1)) + min;
  return randInt;
};

// bubble sort logic
export const bubbleSortStep = (array: number[]): number[] => {
  const newArray = [...array];

  for (let i = 0; i < newArray.length; i++) {
    if (newArray[i] > newArray[i + 1]) {
      let temp = newArray[i];
      newArray[i] = newArray[i + 1];
      newArray[i + 1] = temp;
      return newArray;
    }
  }

  return newArray;
};

//arrays comparing
export const isEqualArrays: isEqualArraysTypes = (arr1, arr2)=> {
  const isEqual = JSON.stringify(arr1) === JSON.stringify(arr2);
  return isEqual;
};


