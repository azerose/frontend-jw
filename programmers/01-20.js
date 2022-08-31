function temperature(num) {
  if (num <= 18) {
    return "조금 춥네요";
  } else if (19 <= num && num <= 23) {
    return "날씨가 좋네요";
  } else return "조금 덥습니다";
}
