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
var deleteDuplicates = function (head) {
    var root = head;
    while (root && root.next) {
        if (root.val === root.next.val) {
            root.val = root.next.val;
            root.next = root.next.next;
        } else {
            root = root.next;
        }
    }
    return head;
};
