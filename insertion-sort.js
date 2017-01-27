let arr = [2,1,3,8,5];

function insertionSort(list) {
  for (let i=1; i<list.length; i++) {
    for (let j=i; list[j]>list[j-1]; j--) {
      let temp = list[j-1];
      list[j-1] = list[j];
      list[j] = temp;
    }
  }
  return list;
}

console.log(insertionSort(arr));
