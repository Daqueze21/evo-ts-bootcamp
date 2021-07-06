import {mergeSort} from './mergeSort';
import {sort} from './common';

describe('mergeSort', () => {

  it('should sort empty array', () => {
    expect(mergeSort([])).toEqual([])
  });

  it('should sort array with only one element', () => {
    expect(mergeSort([10])).toEqual([10]);
  });

  it('should sort sorted array', () => {
    const arr = [0, 1, 2, 3, 4, 5];
    expect(mergeSort(arr)).toEqual(arr);
  });

  it('should sort array of numbers', () => {
    const arr = [8, 1, 10, 44, 24, 555];
    expect(mergeSort(arr)).toEqual(sort(arr));
  });

  it("should sort array of random numbers", () => {
    const valuesArr = Array.from({length: 10}, () => Math.floor(Math.random() * 100));
    const sorted = mergeSort(valuesArr);
    expect(sorted).toEqual(sort(valuesArr));
  });

  it("should sort array of string", () => {
    const arr = ["car", "road", "track", "pass"]
    expect(mergeSort(arr)).toEqual(["car", "pass", "road", "track" ]);
  });
});