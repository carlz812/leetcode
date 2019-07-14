/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function (head) {
    var curr = head,
        tempNext = [];

    if (curr === null) return null;
    while (curr.next !== null || curr.child !== null || tempNext.length !== 0) {
        if (curr.child !== null) {
            var next = curr.next;
            if (next !== null) {
                tempNext.push(next);
            }
            curr.next = curr.child;
            curr.child.prev = curr;
            curr.child = null;
        }
        if (curr.next === null && tempNext.length!==0) {
            var last = tempNext.pop();
            curr.next = last;
            last.prev = curr;
        }
        curr = curr.next;
    }
    return head;
};
