function Node(val) {
    this.val = val;
    this.next = null;
}

/**
 * Initialize your data structure here.
 */
var MyLinkedList = function () {
    this.head = new Node('head');
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
    var node = this.getNodeAtIndex(index);
    return node ? node.val : -1;
};


MyLinkedList.prototype.getNodeAtIndex = function (index) {
    var currNode = this.head, i = 0;
    if (index < 0) {
        return null;
    }
    while (i <= index) {
        currNode = currNode.next;
        if (currNode === null) {
            break;
        }
        i++;
    }
    return currNode;
};


/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
    var newNode = new Node(val);
    newNode.next = this.head.next;
    this.head.next = newNode;
};

/**
 * Append a node of value val to the last element of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
    var newNode = new Node(val);
    newNode.next = null;

    var currNode = this.head;
    while (currNode.next !== null) {
        currNode = currNode.next;
    }
    currNode.next = newNode;
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
    var newNode = new Node(val);
    if(index === 0){
        newNode.next = this.head.next;
        this.head.next = newNode;
    }
    var prevNode = this.getNodeAtIndex(index - 1);

    if (prevNode) {
        newNode.next = prevNode.next;
        prevNode.next = newNode;
    }
};

/**
 * Delete the index-th node in the linked list, if the index is valid.
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
    if (index > 0) {
        var prevNode = this.getNodeAtIndex(index - 1);
        if (!(prevNode.next === null)) {
            prevNode.next = prevNode.next.next;
        }
    } else if (index === 0) {
        this.head = this.head.next;
    }
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = Object.create(MyLinkedList).createNew()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

var obj = new MyLinkedList();

// obj.addAtHead(1);

// console.log(obj);
// obj.addAtTail(3);
// obj.addAtIndex(1, 2);
obj.addAtIndex(0, 1);
// obj.deleteAtIndex(1, 2);
console.log(obj.get(1));


console.log(JSON.stringify(obj));
