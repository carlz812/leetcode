/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

var isPalindrome = function (head) {
    if (head == null) {
        return true;
    }

    var middle = findMiddle(head);
    middle.next = reverse(middle.next);

    var p1 = head, p2 = middle.next;
    while (p1 != null && p2 != null && p1.val == p2.val) {
        p1 = p1.next;
        p2 = p2.next;
    }

    return p2 == null;
};

var findMiddle = function (head) {
    if (head == null) {
        return null;
    }
    var slow = head, fast = head.next;
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}

var reverse = function(head) {
    var prev = null;

    while (head != null) {
        var temp = head.next;
        head.next = prev;
        prev = head;
        head = temp;
    }

    return prev;
}

let middle = findMiddle(head);

console.log(middle);