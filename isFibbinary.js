function isFibbinary(n) {
    // Convert the number to its binary representation
    let binary = n.toString(2);    
    // Use a regular expression to check if there are any consecutive 1's in the 
         binary string
    let pattern = /11/;
    return !pattern.test(binary);
  }
  // Test with the given inputs
  console.log(isFibbinary(10)); // should print "YES"
  console.log(isFibbinary(11)); // should print "NO"
/* 
  Explanation:
  ============
This solution first converts the given number to its 
 representation using the toString method with a base of 2.
 It then uses a regular expression to check if there are
 any occurrences of "11" in the binary string. If there are 
 no occurrences, it returns true, otherwise it returns false.*/