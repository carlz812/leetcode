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
    var ans = new ListNode(null);
    var curr = head;
    while (curr) {
        var num = curr.val;
        insert(num, ans);
        curr = curr.next;
    }
    return ans.next;
};

var insert = function (val, ans) {
    var prev = ans;
    var curr = ans.next;
    // if (!curr) {
    //     ans.next = new ListNode(val);
    // }
    while (curr) {
        if (curr.val < val) {
            prev = curr;
            curr = curr.next;
        } else {
            prev.next = new ListNode(val);
            prev.next.next = curr;
            break;
        }
    }
    prev.next = new ListNode(val);
    prev.next.next = curr;
};
// 插入排序，性能较低
