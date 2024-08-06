// create a class called LinkedList. It should have a head and tail property. It should have an instance method called append that will append to the linked list a node instance. Also a property called  insertAt that will insert a node at a given index

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  insertAt(value, index) {
    if (index < 0 || index > this.length) {
      throw new Error("Index out of bounds");
    }

    const newNode = new Node(value);

    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      if (this.length === 0) {
        this.tail = newNode;
      }
    } else {
      let previousNode = this.head;
      for (let i = 0; i < index - 1; i++) {
        previousNode = previousNode.next;
      }
      newNode.next = previousNode.next;
      previousNode.next = newNode;
      if (newNode.next === null) {
        this.tail = newNode;
      }
    }

    this.length++;
  }
}

const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
console.log(linkedList);

linkedList.insertAt(4, 1); // Inserta el valor 4 en el índice 1
console.log(linkedList);
