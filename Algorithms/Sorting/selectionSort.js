const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
  const length = array.length;
  for(let i = 0; i < length; i++) {
      //set current index as minimum
      let min = i;
      let temp = array[i];
      for(j = i+1; j < length; j++) {
          if(array[j] < array[min]) {
              //update minimum if current is lower
              //than what we have previously
              min = j;
          } 
      }
      //the min value gets thrown to the top of the array
      //with each iteration the outer loop finds itself in..
      array[i] = array[min]
      array[min] = temp;
  }
  return array;

}

selectionSort(numbers);