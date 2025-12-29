class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = this.tail = newNode;
      return;
    }

    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
  }

  prepend(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = this.tail = newNode;
      return;
    }

    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
  }

  delete(data) {
    if (!this.head) return;

    let current = this.head;

    while (current) {
      if (current.data === data) {
        if (current.prev) {
          current.prev.next = current.next;
        } else {
          this.head = current.next; 
        }

        if (current.next) {
          current.next.prev = current.prev;
        } else {
          this.tail = current.prev; 
        }

        return;
      }
      current = current.next;
    }
  }

  printForward() {
    let current = this.head;
    let result = "";
    while (current) {
      result += current.data + (current.next ? " <-> " : "");
      current = current.next;
    }
    console.log(result);
  }

  printBackward() {
    let current = this.tail;
    let result = "";
    while (current) {
      result += current.data + (current.prev ? " <-> " : "");
      current = current.prev;
    }
    console.log(result);
  }
}
