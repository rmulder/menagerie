/**
 * Source : https://leetcode.com/problems/maximum-subarray/
 * Author : samsisle
 * Date   : 2019-11-14
 *
 * Time Complexity  : O(n)
 * Space Complexity : O(1)
 * 
 * This is using Kadane's Algorithm (Dynamic Programming). 
 */

function maxSubArray(A) {
  if (!A.length) return 0;

  let maxSum = nums[0];

  for (let i = 1; i < A.length; i++) {
    if (A[i - 1] > 0) A[i] += A[i - 1];
    maxSum = Math.max(A[i], maxSum);
  }

  return maxSum;
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
