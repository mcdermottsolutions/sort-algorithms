module.exports = (list) => {
  for (let i=0; i<list.length; i++) {
    let j=i;
    for (let k=i+1; k<list.length; k++) {
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
