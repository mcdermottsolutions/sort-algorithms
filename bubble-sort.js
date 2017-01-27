let arr = [2,1,3,8,5];

function bubbleSort(list) {
  let len = arr.length;
  for (let i=0; i<len; i++) {
    let swapped = false;
    for (let j=len; j>i; j--) {
      if (list[j] < list[j-1]) {
        let temp = list[j-1];
        list[j-1] = list[j];
        list[j] = temp;
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return list;
}

console.log(bubbleSort(arr));
