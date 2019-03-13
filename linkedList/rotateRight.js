/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    var len = getLength(head);
    var n = len ? k % len : 0;
    for (var i = 0; i < n; i++) {
        head = rotateOnce(head);
    }
    return head;
};

function rotateOnce(head) {
    if (!head) {
        return null;
    }

    if (!head.next) {
        return head;
    }
    var currNode = head;
    var prev = head;
    while (currNode.next !== null) {
        prev = currNode;
        currNode = currNode.next;
    }
    prev.next = null;
    currNode.next = head;
    head = currNode;
    return head;
}

function getLength(head) {
    if (!head) {
        return 0;
    }
    var currNode = head,
        count = 1;
    while (currNode.next !== null) {
        currNode = currNode.next;
        count++;
    }
    return count;
}