
const merge = <T>(left: T[], right: T[]): T[] => {
    let arr: T[] = [];
    
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            arr.push(left.shift() as T);  
        } else {
            arr.push(right.shift() as T); 
        };
    };
    
    return [...arr, ...left, ...right]
}

export const mergeSort = <T>(array: T[]): T[] => {
  const arrCopy = [...array];
  const half = arrCopy.length / 2;
  
  if(arrCopy.length < 2){
    return arrCopy 
  };
  
  const left = arrCopy.splice(0, half);
  return merge(mergeSort(left), mergeSort(arrCopy))
};

