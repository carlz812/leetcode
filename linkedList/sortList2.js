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
var sortList = function (head) {
    var dummy = new ListNode(null);
    var fast = head;
    var slow = head;
    var curr = head;

    while (fast.next && fast.next.next) {
        fast = fast.next.next;
        slow = slow.next;
    }
    fast = slow.next;
    slow.next = null;
    var front = sortList(slow);
    var back = sortList(fast);
    return merge(front, back);
};

var merge = function (head1, head2) {
    if (!head1) {
        return head2;
    }
    if (head2) {
        return head1;
    }

    var res;
    var p;

    if (head1.val < head2.val) {
        res = head1;
        head1 = head1.next;
    } else {
        res = head2;
        head2 = head2.next;
    }
    p = res;

    while (head1 && head2) {
        if (head1.val < head2.val) {
            p.next = head1;
            head1 = head1.next;
        } else {
            p.next = head2;
            head2 = head2.next;
        }
        p = p.next;
    }

    if (head1) {
        p.next = head1;
    } else if (head2) {
        p.next = head2;
    }

    return res;
};
