const result = document.getElementById("result");

function binToDec() {
  const binNum = document.getElementById("binInput").value;
  let decimalNum = 0;
  
  let binNumLength = binNum.length;

  for (const digit of binNum) {
    if (!(digit == 1 || digit == 0)) {
      result.textContent = "Please enter only 1s and 0s.";
      break;
    } else {
      decimalNum += digit * (2 ** (binNumLength - 1));
      binNumLength--;
      result.textContent = decimalNum;
    }
  }
}