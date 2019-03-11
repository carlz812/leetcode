/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    var dummy = new ListNode('dummy');
    dummy.next = head;
    var currentNode = dummy;
    while (currentNode !== null && currentNode.next !== null) {
        var nextNode = currentNode.next;
        if (nextNode.val === val) {
            currentNode.next = nextNode.next;
        } else {
            currentNode = currentNode.next;
        }
    }
    return dummy.next;
};