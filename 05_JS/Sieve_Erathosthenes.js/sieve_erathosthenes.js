var sieve = function (n) {
    "use strict";
  
    var array = [],
      primes = [],
      i,
      j;
    
    for (i = 2; i <= n; i++) {
      array[i] = true;
    }
  
    for (i = 2; i <= Math.sqrt(n); i++) {
      if (array[i]) {
        for (j = i * i; j <= n; j += i) {
          array[j] = false;
        }
      }
    }
  
    for (i = 2; i <= n; i++) {
      if (array[i]) {
        primes.push(i);
      }
    }
  
    return primes;
  };
  console.log(sieve(1000000));
  