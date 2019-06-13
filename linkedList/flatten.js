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
    var currentNode = head;
    while (currentNode.next !== null) {
        var child = currentNode.child;
        if (child === null) {
            currentNode = currentNode.next;
        } else {
            var next = currentNode.next;
            var child = currentNode.child;

            next.prev = null;
            currentNode.next = child;
            child.prev = currentNode;

            var children = flatten(child);

            children.next = next;
            next.prev = children;

            currentNode = next;
        }
    }
    return currentNode;
};
