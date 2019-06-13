/**
 * // Definition for a Node.
 * function Node(val,next,random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    if (!head)
        return null;

    let hash = new Map();
    let newArr = [];
    let node = head;

    while (node) {
        hash.set(node, newArr.length);
        newArr.push(new Node(node.label));
        node = node.next;
    }



};