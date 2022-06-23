// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]

// Example 2:
// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Explanation: [9,4] is also accepted.

/**
 * Step 01 - Choose the array which have minimum length.
 * Step 02 - Iterate the for-loop at smaller array.
 * Step 2.1- Create a blank array.
 * Step 03 - Compare all the element of smaller array with another array by using if- else condition.
 * Step 04 - If found similar then push it in blank array & splice the eelement from smaller array
 * Step 05 - Decrease the value of i by one so it will again start from current index.
 * Step 06 - Return result.
 */

function intersect(num1, num2) {
  const num1Length = num1.length,
    num2Length = num2.length,
    res = [];
  if (num1Length < num2Length) {
    for (let i = 0; i < num1Length; i++) {
      for (let j = 0; j < num2Length; j++) {
        if (num1[i] === num2[j]) {
          res.push(num1[i]);
          num1.splice(i, 1);
          i -= 1;
        }
      }
    }
  } else {
    for (let i = 0; i < num2Length; i++) {
      for (let j = 0; j < num1Length; j++) {
        if (num2[i] === num1[j]) {
          res.push(num2[i]);
          num2.splice(i, 1);
          i -= 1;
        }
      }
    }
  }
  return res;
}
console.log(intersect([1, 2, 2, 1], [2, 2]));
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));
console.log(intersect([11, 94, 56, 76], [11, 11, 94, 94, 76]));
