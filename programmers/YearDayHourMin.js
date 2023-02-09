const toVerbose = (a, b) => {
  const start = new Date(a);
  const last = new Date(b);
  let Min = 1000 * 60;
  let hour = Min * 60;
  let Day = hour * 24;
  let Month = Day * 30;
  let Year = Day * 365;
  let diff = Math.abs(last - start);
  console.log(diff / Month);
  if (diff < hour) {
    return `${Math.floor(diff / Min)}분`;
  } else if (diff < Day) {
    return `${Math.floor(diff / hour)}시간`;
  } else if (diff < Month) {
    return `${Math.floor(diff / Day)}일`;
  } else if (diff < Year) {
    return `${Math.floor(diff / Month)}달`;
  } else if (Year < diff) {
    return `${Math.floor(diff / Year)}년`;
  }
};
