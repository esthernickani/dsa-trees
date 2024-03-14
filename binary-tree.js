/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    const minimumDepth = (root) => {
      if (!root) return 0;

      if (root.left == null && root.right == null) {
        return 1;
      }

      if (root.left == null ) {
        return minimumDepth(root.right) + 1;
      }

      if (root.right == null ) {
        return minimumDepth(root.left) + 1;
      }

      return Math.min(minimumDepth(root.left), minimumDepth(root.right)) + 1;
    }

    return minimumDepth(this.root)

  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {

    const maximumDepth = (root) => {
      if (!root) return 0;

      let leftDepth = maximumDepth(root.left)
      let rightDepth = maximumDepth(root.right)

      if (leftDepth > rightDepth) {
        return leftDepth + 1
      } else {
        return rightDepth + 1
      }
    }

    return maximumDepth(this.root)
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    let result = 0;

    const maximumSum = (root) => {
      if (!root) return 0

      let leftSum = maximumSum(root.left)
      let rightSum = maximumSum(root.right)

      result = Math.max(result, root.val + leftSum + rightSum)
      return Math.max(0, leftSum + root.val, rightSum + root.val)
    }

    maximumSum(this.root)
    return result;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if (!this.root) return 0;
    let queue = [ this.root ]
    let currentLarger = Infinity

    while (queue.length > 0) {
      let current = queue.shift()

      if (current.val > lowerBound && current.val < currentLarger) {
        currentLarger = current.val
      }

      if (current.left) queue.push(current.left)
      if (current.right) queue.push(current.right)
    }

    return currentLarger === Infinity? null : currentLarger
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {

  }
}

module.exports = { BinaryTree, BinaryTreeNode };
