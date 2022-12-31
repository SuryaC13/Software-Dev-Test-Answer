function countIslands(matrix) {
    // Initialize a count to keep track of the number of islands
    let count = 0;
  
    // Iterate through the matrix
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        // If we find a 1, do a depth-first search to explore the island
        if (matrix[i][j] === 1) {
          count++;
          exploreIsland(matrix, i, j);
        }
      }
    }
  
    return count;
  }
  
  function exploreIsland(matrix, i, j) {
    // Check if the current position is out of bounds or if it is a 0
    if (i < 0 || i >= matrix.length || j < 0 || j >= matrix[i].length || matrix[i][j] === 0) {
      return;
    }
  
    // Mark the current position as visited (set it to 0)
    matrix[i][j] = 0;
  
    // Explore the adjacent positions (top, bottom, left, right)
    exploreIsland(matrix, i - 1, j);
    exploreIsland(matrix, i + 1, j);
    exploreIsland(matrix, i, j - 1);
    exploreIsland(matrix, i, j + 1);
  }
  
  // Example usage
  const matrix = [  [1, 1, 0, 0, 0],
    [0, 1, 0, 0, 1],
    [1, 0, 0, 1, 1],
    [0, 0, 0, 0, 0],
    [1, 0, 1, 0, 1]
  ];
  
  console.log(countIslands(matrix)); // Output: 6
  
  /*
  Explanation:
  ============
  This solution has a time complexity of O(nm) 
  where n is the number of rows and m is the number of columns in the matrix. 
  The space complexity is O(nm) as well, since we are using a recursive function and 
  the maximum depth of the recursion will be the number of 1s in the matrix. */
  