/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let sum
  let dig
  let carry = 0
  let head
  let tail
  while ((l1 && l1.val != undefined) || (l2 && l2.val != undefined) || carry) {
    sum = (l1 ? l1.val : 0) +
      (l2 ? l2.val : 0) +
      (carry || 0)
    dig = sum % 10
    carry = (sum > 9) ? 1 : 0
    if (!head) {
      head = new ListNode(dig, null)
      tail = head
    } else {
      tail.next = new ListNode(dig, null)
      if (tail === head) head.next = tail.next
      tail = tail.next
    }
    if (l1) l1 = l1.next
    if (l2) l2 = l2.next
  }
  return head
};
/*
loop until no digits remain
while looping, track carry and create new end node
O(n) where n = max length of inputs
*/