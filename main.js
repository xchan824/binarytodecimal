const result = document.getElementById("result");

function binToDec() {
    const binNum = document.getElementById("binInput").value;
    let decimalNum = 0;
    
    let binNumLength = binNum.length;

    for (const digit of binNum) {
      decimalNum += digit * (2 ** (binNumLength - 1));
      binNumLength--;
    }

    result.textContent = decimalNum;
}