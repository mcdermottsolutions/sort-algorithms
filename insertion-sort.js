let arr = [2,1,3,8,5];

function insertionSort(list) {
  for (let i=1; i<list.length; i++) {
    //console.log('i: ' + i);
    for (let j=i; list[j]>list[j-1]; j--) {
      //console.log('j: ' +  j);
      let temp = list[j-1];
      list[j-1] = list[j];
      list[j] = temp;
    }
  }
  console.log(list);
}

insertionSort(arr);
