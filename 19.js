/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let nodes = []
  let tempNode = head
  while (tempNode) {
    nodes.push(tempNode)
    tempNode = tempNode.next
  }
  // remove node at index nodes.length - n
  if (nodes.length - n === 0) {
    head = head.next
  } else if (nodes.length === 1) {
    nodes[nodes.length - 2].next = null
  } else {
    nodes[nodes.length - n - 1].next = nodes[nodes.length - n].next
  }

  return head
};
/*
create an array to store nodes O(N), where N = lenght of the list
rearrange pointers to remove nth node O(1)
pick out the first node O(1)
*/