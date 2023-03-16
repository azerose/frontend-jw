// 배열로 구현
// Left= index*2
// right= index*2+  1
// parent= Math.floor(index/2)

const tree = [
  undefined, // 1
  9, // 1*2,1*2+1
  3,
  8, //2*2,2*2+1,3*2,3*2+1
  2,
  5,
  undefined,
  7, //4*2, 4*2+1,5*2,5*2+1
  undefined,
  undefined,
  undefined,
  4,
];

// 연결리스트를 이용

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  enqueue(newValue) {
    const newNode = new Node(newValue);
    if (this.head === null) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size += 1;
  }

  dequeue() {
    const value = this.head.value;
    this.head = this.head.next;
    this.size -= 1;
    return value;
  }

  peek() {
    return this.head.value;
  }
}

class Tree {
  constructor(node) {
    this.root = node;
  }

  display() {
    // Level Order
    const queue = new Queue();
    queue.enqueue(this.root);
    while (queue.size) {
      const currentNode = queue.dequeue();
      console.log(currentNode.value);
      if (currentNode.left) queue.enqueue(currentNode.left);
      if (currentNode.right) queue.enqueue(currentNode.right);
    }
  }
}

const treeList = new Tree(new Node(9));
treeList.root.left = new Node(3);
treeList.root.right = new Node(8);
treeList.root.left.left = new Node(3);
treeList.root.left.right = new Node(5);
treeList.root.right.right = new Node(7);
treeList.root.left.right.right = new Node(4);

treeList.display();
