let arr = [2,1,3,8,5];

function selectionSort(list) {
  for (let i=0; i<arr.length; i++) {
    let j=i;
    for (let k=i+1; k<arr.length; k++) {
      if (list[k] < list[j]) {
        j=k;
      }
    }
    let temp = list[i];
    list[i] = list[j];
    list[j] = temp;
  }
  return list;
}

console.log(selectionSort(arr));
