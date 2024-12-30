function secondHighest(arr) {
  
  if (arr.length < 2) {
    return -Infinity; 
  }

  let max = -Infinity; 
  let secondMax = -Infinity; 

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      secondMax = max; 
      max = arr[i]; 
    } else if (arr[i] > secondMax && arr[i] < max) {
      secondMax = arr[i]; 
    }
  }

  if (secondMax === -Infinity) {
    return -Infinity;
  }

  return secondMax;
}
var arr = [5, 1, 2, 3, 4];
console.log("The second highest number in the array is: " + secondHighest(arr));