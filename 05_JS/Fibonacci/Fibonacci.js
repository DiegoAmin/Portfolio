var memo = {};
function fibonacci() {
  "use strict";
  var n = document.getElementById("num").value;
  var val = f(n);
  return val;
}

function f(n) {
  var value;
  if (memo.hasOwnProperty(n)) {
    value = memo[n];
  } else {
    if (n <= 1) {
      value = n;
    } else {
      value = f(n - 1) + f(n - 2);
    }

    memo[n] = value;
  }

  return value;
}

console.log(fibonacci(15)); // 610