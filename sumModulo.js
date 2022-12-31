function sumModulo(n, m) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    return sum % m;
  }
  
  // Test with the given inputs
  console.log(sumModulo(1, 100000)); // should print 1
  console.log(sumModulo(2, 100000)); // should print 5
  console.log(sumModulo(3, 100000)); // should print 32
  console.log(sumModulo(4, 100000)); // should print 288
  console.log(sumModulo(5, 100000)); // should print 3413
  console.log(sumModulo(6, 100000)); // should print 50069
  /*
  Explanation:
  ============
  This solution uses a for loop to iterate from 1 to n, adding each number 
  to a running total. At the end, it returns the sum modulo m using the modulo operator (%). */