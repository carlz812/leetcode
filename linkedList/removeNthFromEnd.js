/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {

    if (head === null) {
        return head;
    }

    var pointer1 = head;
    var pointer2 = head;

    for (var i = 0; i < n; i++) {
        pointer2 = pointer2.next;
        if (pointer2 === null && i != n - 1) {
            return null;
        }
    }
    if (pointer2 === null) {
        return pointer1.next;
    }
    while (pointer2.next !== null) {
        pointer2 = pointer2.next;
        pointer1 = pointer1.next;
    }
    pointer1.next = pointer1.next.next;
    return head;
};