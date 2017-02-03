module.exports = (list) => {
  for (let i=0; i<list.length; i++) {

    let swapped = false;
    for (let j = i+1; j>0; j--) {

      if (list[j] < list[j-1]) {
        let temp = list[j];
        list[j] = list[j-1];
        list[j-1] = temp;
        swapped = true
      }
      if (!swapped)
        break;
    }
  }
  return list;
}
