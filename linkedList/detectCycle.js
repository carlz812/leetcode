/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    if (head == null || head.next == null) {
        return null;
    }

    var fast, slow;
    fast = head.next;
    slow = head;
    while (fast != slow) {
        if (fast === null || fast.next === null)
            return null;
        fast = fast.next.next;
        slow = slow.next;
    }
    while (head != slow.next) {
        head = head.next;
        slow = slow.next;
    }

    return head;
}