// Create a class called Stack. It should have a method to push, pop and peek

class Stack {
  constructor() {
    this.stack = [];
  }

  push(element) {
    this.stack.push(element);
  }

  pop() {
    return this.stack.pop();
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }
}

const stack = new Stack();

stack.push("Richard");
stack.push("Angela");
stack.push("Joseph");

console.log(stack.peek());

console.log(stack.pop());

console.log(stack.peek());
