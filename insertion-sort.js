module.exports = (list) => {
  for (let i=1; i<list.length; i++) {
    let temp = list[i];
    let j=i;
    for (; temp>list[j-1]; j--) {
      list[j] = list[j-1];
    }
    list[i] = temp;
  }
  return list;
}
