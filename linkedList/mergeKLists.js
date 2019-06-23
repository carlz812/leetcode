/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    if (lists.every(head => head === null)) {
        return null;
    }

    let min = Number.MAX_VALUE,
        pos = null;

    for (var i = 0; i < lists.length; i++) {
        var head = lists[i];
        if (head && (head.val < min)) {
            min = head.val;
            pos = i;
        }
    }

    var current = lists[pos];
    lists[pos] = lists[pos].next;
    current.next = mergeKLists(lists);
    return current;
};
