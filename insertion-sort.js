module.exports = (list) => {
  for (let i=1; i<list.length; i++) {
    for (let j=i; list[j]>list[j-1]; j--) {
      let temp = list[j-1];
      list[j-1] = list[j];
      list[j] = temp;
    }
  }
  return list;
}
