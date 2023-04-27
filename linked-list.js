/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** show(): prints all nodes in list */
  show() {
    let node = this.head;

    while (node) {
      console.log(node.val);
      node = node.next;
    }
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let node = new Node(val);

    if(this.head == null)
      this.tail = this.head = node;
    else {
      this.tail.next =  node;
      this.tail = node;
    }
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let node = new Node(val);

    if (!this.head)
      this.tail = this.head = node;
    else {
      node.next = this.head;
      this.head = node;
    }
  }

  /** pop(): return & remove last item. */

  pop() {
    if (!this.head)
      return null;

    let prev;
    let node = this.head;

    while (node !== this.tail) {
      prev = node;
      node = node.next;
    }

    prev.next = null;
    this.tail = prev;
    return node.val;
  }

  /** shift(): return & remove first item. */

  shift() {
    const val = this.head.val;
    this.head = this.head.next;
    return val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let count = 0;
    let node = this.head;
    
    while (node && count !== idx) {
      count++;
      node = node.next;
    }

    if (count !== idx || !node)
      return -1;
    else
      return node.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let count = 0;
    let node = this.head;

    while (node && count !== idx) {
      count++;
      node = node.next;
    }

    if (count !== idx || !node)
      return -1;
    else
      node.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (!this.head)
      return null;

    let prev;
    let newNode = new Node(val);
    let currentNode = this.head;
    let count = 0;

    while (currentNode && count !== idx) {
      prev = currentNode;
      currentNode = currentNode.next
      count++;
    }

    if (!currentNode || count !== idx)
      return null
    else {
      prev.next = newNode;
      newNode.next = currentNode;
    }

  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (!this.head)
      return null;

    let prev;
    let node = this.head;
    let count = 0;

    while (node && idx !== count) {
      count++;
      prev = node;
      node = node.next;
    }

    if (!node || count !== idx)
      return null;
    else 
      prev.next = node.next;

    return node.val;
  }

  /** average(): return an average of all values in the list */

  average() {
    if (!this.head)
      return null;
    let count = 0;
    let total = 0;
    let node = this.head;
    while (node) {
      count++;
      total += node.val;
      node = node.next;
    }
    return total/count;
  }
}

module.exports = LinkedList;
