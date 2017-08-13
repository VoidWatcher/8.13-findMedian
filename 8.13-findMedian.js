function findMedian (arr) {
  arr.sort((a, b) => a - b);
  let lowMiddle = Math.floor((arr.length - 1) / 2);
  let highMiddle = Math.ceil((arr.length - 1) / 2);
  let median = (arr[lowMiddle] + arr[highMiddle]) / 2;
  return median;
}

console.log(findMedian([7,3,8,1,0]));
