function grade(score) {
  if (score < 0 || 100 < score) {
    return "잘못된 점수입니다.";
  }
  if (90 <= score && score <= 100) {
    return "A";
  } else if (80 <= score && score <= 89) {
    return "B";
  } else if (70 <= score && score <= 79) {
    return "C";
  } else if (60 <= score && score <= 69) {
    return "D";
  } else return "F";
}
