const swap = (ids, i, j) => {
  temp = ids[i];
  ids[i] = ids[j];
  ids[j] = temp;
};

const partition = (ids) => {
  cIndex = 0;

  for (i in Array.from(Array(ids.length).keys()).map((a) => a)) {
    if (ids[i] > 0) {
      swap(ids, i, cIndex);
      cIndex += 1;
    }
  }
  return cIndex;
};

const foo = (ids) => {
  let k = partition(ids);

  for (i in Array.from(Array(k).keys()).map((a) => a)) {
    value = Math.abs(ids[i]);
    if (value - 1 < k && ids[value - 1] >= 0) {
      ids[value - 1] = -ids[value - 1];
    }
  }
  for (i in Array.from(Array(k).keys()).map((a) => a)) {
    if (ids[i] > 0) {
      i = Number(i);
      return i + 1;
    }
  }
  return k + 1;
};
