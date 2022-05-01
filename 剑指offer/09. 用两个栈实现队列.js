class CQueue {
  stack = [];

  tempStack = [];

  appendTail(value) {
    this.stack.push(value);
    console.log(this.stack);
  }

  deleteHead() {
    if (this.stack.length === 0) {
      return -1;
    }
    this.tempStack = [];
    while (this.stack.length > 1) {
      var last = this.stack.pop();
      this.tempStack.push(last);
    }
    var target = this.stack.pop();

    while (this.tempStack.length) {
      var last = this.tempStack.pop();
      this.stack.push(last);
    }
    return target;
  }
}
