function tryFortune() {
  const resultInt = Math.floor(Math.random() * 7);
  switch (resultInt) {
    case 0:
      resultText = "大凶";
      break;
    case 1:
      resultText = "凶";
      break;
    case 2:
      resultText = "末吉";
      break;
    case 3:
      resultText = "小吉";
      break;
    case 4:
      resultText = "中吉";
      break;
    case 5:
      resultText = "吉";
      break;
    default:
      resultText = "大吉";
      break;
  }
  document.getElementById("result").textContent = resultText;
}
