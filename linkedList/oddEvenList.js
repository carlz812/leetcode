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
var oddEvenList = function (head) {
    var odd = [];
    var even = [];
    var f = true;
    if (!head) {
        return null;
    }

    while (head) {
        if (f) {
            odd.push(head);
        } else {
            even.push(head);
        }
        f = !f;
        head = head.next;
    }

    head = odd[0];
    var last = odd.concat(even).reduce(function (a, b) {
        a.next = b;
        return b;
    });
    last.next = null;
    return head;
};
