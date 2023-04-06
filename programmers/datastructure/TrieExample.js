class Node {
  constructor(value = "") {
    this.value = value;
    this.children = new Map();
    this.pathCount = 1;
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(string) {
    let currentNode = this.root;

    for (const char of string) {
      if (!currentNode.children.has(char)) {
        currentNode.children.set(char, new Node(currentNode.value + char));
      } else {
        currentNode.children.get(char).pathCount += 1;
      }
      currentNode = currentNode.children.get(char);
    }
  }
  has(string) {
    let currentNode = this.root;

    for (const char of string) {
      if (!currentNode.children.has(char)) {
        return false;
      }
      currentNode = currentNode.children.get(char);
    }
    return true;
  }

  showList(string) {
    let currentNode = this.root;
    const array = [];
    for (const char of string) {
      currentNode = currentNode.children.get(char);
      array.push([currentNode.pathCount, currentNode.value]);
    }
    return array;
  }
}

function solution(words) {
  const trie = new Trie();
  for (let word of words) {
    trie.insert(word);
  }
  let list = [];
  for (let word of words) {
    const array = trie.showList(word);
    console.log(array);
    if (word.length === 1) {
      list.push(1);
    }
    while (array.length > 1) {
      if (array[0][0] === 1) {
        list.push(1);
        break;
      }

      if (array[array.length - 1][0] > 1) {
        list.push(word.length);
        break;
      }
      if (array[array.length - 1][0] === 1) {
        const num = array.pop()[0];
        if (array[array.length - 1][0] > num) {
          list.push(array.length + 1);
          break;
        }
      }
    }
  }
  console.log(list);
  return list.reduce((a, b) => a + b);
}

solution(["go", "gone", "guild"]);
