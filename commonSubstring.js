function commonSubstring(str1, str2) {
  for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str2.length; j++) {
      if (str1[i] === str2[j]) {
        return "YES";
      }
    }
  }
  return "NO";
}

// Test with the given inputs
console.log(commonSubstring("HELLO", "WORLD")); // should print "YES"
console.log(commonSubstring("HI", "ALL")); // should print "NO"
/*
Explanation:
============
This solution uses two nested for loops to iterate through each character 
of both strings and check if any characters are the same. If a common
 character is found, it returns "YES". If it finishes the loops without
  finding a common character, it returns "NO".
*/
