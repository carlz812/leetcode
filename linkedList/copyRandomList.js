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

    var hashMap = {};
    var newHead = new Node(head.val, null, null);
    var lastNode = newHead;

    var node = head.next;
    hashMap[head.val] = newHead;
    var newNode = null;
    while (node) {
        newNode = new Node(node.val, null, null);
        hashMap[node.val] = newNode;
        lastNode.next = newNode;
        lastNode = newNode;
        node = node.next;
    }

    var old = head;
    while (old) {
        newNode = hashMap[old.val];
        var random = old.random;
        if (random) {
            newNode.random = hashMap[random.val];
        }
        old = old.next;
    }

    return newHead;
};
