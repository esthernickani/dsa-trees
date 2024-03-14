/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if (!this.root) return 0
    let sum = this.root.val

    function sumHelper(node) {
      for (let child of node.children) {
        sum += child.val

        if (child.children.length > 0) {
          sumHelper(child)
        }
      }
    }

    sumHelper(this.root)
    return sum;

  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if (!this.root) return 0
    let noOfEvens = 0
    let queue = []
    queue.push(this.root)

    while(queue.length > 0) {
      let current = queue.shift()

      if (current.val % 2 === 0) {
        noOfEvens ++
      }

      if (current.children.length > 0) {
        for (let child of current.children) {
          queue.push(child)
        }
      }
    }

    return noOfEvens;

  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if (!this.root) return 0
    let countOfGreater = 0
    let queue = [ this.root.val ]

    while (queue.length > 0) {
      let current = queue.shift()
      if (current.val > lowerBound) countOfGreater ++;

      if (current.children.length > 0) {
        for (let child of current.children.length) {
          queue.push(child)
        }
      }
    }

    return countOfGreater;
  }
}

module.exports = { Tree, TreeNode };
