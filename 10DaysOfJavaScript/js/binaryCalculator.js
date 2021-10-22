var Result = document.getElementById("res");

function CheckOperatorHandler() {
  if (
    Result.innerHTML.endsWith("+") ||
    Result.innerHTML.endsWith("-") ||
    Result.innerHTML.endsWith("*") ||
    Result.innerHTML.endsWith("/")
  ) {
    return true;
  }
}

function ZeroClickHandler() {
  Result.innerHTML += "0";
}

function OneClickHandler() {
  Result.innerHTML += "1";
}

function SumClickHandler() {
  if (Result.innerHTML.length != 0 && !CheckOperatorHandler()) {
    Result.innerHTML += "+";
  }
}

function SubClickHandler() {
  if (Result.innerHTML.length != 0 && !CheckOperatorHandler()) {
    Result.innerHTML += "-";
  }
}

function MulClickHandler() {
  if (Result.innerHTML.length != 0 && !CheckOperatorHandler()) {
    Result.innerHTML += "*";
  }
}

function DivClickHandler() {
  if (Result.innerHTML.length != 0 && !CheckOperatorHandler()) {
    Result.innerHTML += "/";
  }
}

function ClrClickHandler() {
  Result.innerHTML = "";
}

function EqlClickHandler() {
  if (!CheckOperatorHandler()) {
    let re = /\d+/g;
    let re2 = /[\+\-\*\/]+/g;
    let numbers = Result.innerHTML.match(re);
    let operations = Result.innerHTML.match(re2);
    while (operations.length > 0) {
      if (operations.includes("*")) {
        let indexOfMul = operations.indexOf("*");
        let mul =
          (indexOfMul != 0
            ? parseInt(numbers[indexOfMul - 1], 2)
            : parseInt(numbers[indexOfMul], 2)) *
          parseInt(numbers[indexOfMul + 1], 2);
        numbers.splice(indexOfMul, 2);
        numbers.splice(indexOfMul, 0, mul.toString(2));
        operations.splice(indexOfMul, 1);
      } else if (operations.includes("/")) {
        let indexOfDiv = operations.indexOf("/");
        let division =
          (indexOfDiv != 0
            ? parseInt(numbers[indexOfDiv - 1], 2)
            : parseInt(numbers[indexOfDiv], 2)) /
          parseInt(numbers[indexOfDiv + 1], 2);
        numbers.splice(indexOfDiv, 2);
        numbers.splice(indexOfDiv, 0, division.toString(2));
        operations.splice(indexOfDiv, 1);
      } else if (operations.includes("+")) {
        let indexOfSum = operations.indexOf("+");
        let sum =
          (indexOfSum != 0
            ? parseInt(numbers[indexOfSum - 1], 2)
            : parseInt(numbers[indexOfSum], 2)) +
          parseInt(numbers[indexOfSum + 1], 2);
        numbers.splice(indexOfSum, 2);
        numbers.splice(indexOfSum, 0, sum.toString(2));
        operations.splice(indexOfSum, 1);
      } else {
        let indexOfSub = operations.indexOf("-");
        let sub =
          (indexOfSub != 0
            ? parseInt(numbers[indexOfSub - 1], 2)
            : parseInt(numbers[indexOfSub], 2)) -
          parseInt(numbers[indexOfSub + 1], 2);
        numbers.splice(indexOfSub, 2);
        numbers.splice(indexOfSub, 0, sub.toString(2));
        operations.splice(indexOfSub, 1);
      }
    }
    Result.innerHTML = numbers[0].toString(2);
  } else {
    alert("Invalid syntax");
  }
}
