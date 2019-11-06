/**
 * Source : https://leetcode.com/problems/container-with-most-water/
 * Author : samsisle
 * Date   : 2019-11-06
 *
 * Time Complexity  : O(n)
 * Space Complexity : O(1)
 */

function maxArea(A) {
  let start = 0;
  let end = A.length - 1;
  let area = 0;

  while (start < end) {
    area = Math.max(area, Math.min(A[start], A[end]) * (end - start));

    if (A[start] < A[end]) {
      start++;
    } else {
      end--;
    }
  }

  return area;
}
