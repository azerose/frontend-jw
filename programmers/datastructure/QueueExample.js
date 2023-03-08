// function solution(priorities, location) {
//   // location === index값
//   let max;
//   let value;
//   let count = 0;
//   while (true) {
//     max = Math.max.apply(null, priorities);
//     value = priorities.shift();
//     if (value === max) {
//       count++;
//       if (location === 0) {
//         return count;
//       }
//     } else {
//       priorities.push(value);
//     }
//     location--;
//     if (location == -1) {
//       location = priorities.length - 1;
//     }
//   }
// }

// Queue로 구현

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  enqueue(newValue) {
    const newNode = new Node(newValue);
    if (this.head === null) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }
  dequeue() {
    const value = this.head.value;
    this.head = this.head.next;
    return value;
  }

  peek() {
    return this.head.value;
  }
}

function solution(priorities, location) {
  const queue = new Queue();
  for (let i = 0; i < priorities.length; i++) {
    queue.enqueue([priorities[i], i]);
  }

  priorities.sort((a, b) => b - a);

  let count = 0;
  while (true) {
    const currentValue = queue.peek();
    if (currentValue[0] < priorities[count]) {
      queue.enqueue(queue.dequeue());
    } else {
      const value = queue.dequeue();
      count++;
      if (location === value[1]) {
        return count;
      }
    }
  }
}
