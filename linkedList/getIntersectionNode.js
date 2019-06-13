var getIntersectionNode = function(headA, headB) {
    var lenA = getLen(headA);
    var lenB = getLen(headB);

    while (lenA > lenB) {
        headA = headA.next;
        lenA--;
    }

    while (lenB > lenA) {
        headB = headB.next;
        lenB--;
    }

    while (headA && headB) {
        if (headA === headB)
            return headA;

        headA = headA.next;
        headB = headB.next;
    }

    return null;
};


function getLen(node) {
    var len = 0;

    while (node) {
        len++;
        node = node.next;
    }

    return len;
}