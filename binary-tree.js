

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

 
  minDepth() {
    return this._minDepth(this.root);
  }

  _minDepth(node) {
    if (!node) {
      return 0;
    }

    const leftDepth = this._minDepth(node.left);
    const rightDepth = this._minDepth(node.right);

    if (leftDepth === 0 || rightDepth === 0) {
      return leftDepth + rightDepth + 1;
    }

    return Math.min(leftDepth, rightDepth) + 1;
  }

 
  maxDepth() {
    return this._maxDepth(this.root);
  }

  _maxDepth(node) {
    if (!node) {
      return 0;
    }

    const leftDepth = this._maxDepth(node.left);
    const rightDepth = this._maxDepth(node.right);

    return Math.max(leftDepth, rightDepth) + 1;
  }

  
  maxSum() {
    return this._maxSum(this.root);
  }

  _maxSum(node) {
    if (!node) {
      return 0;
    }

    const leftMax = Math.max(0, this._maxSum(node.left));
    const rightMax = Math.max(0, this._maxSum(node.right));

    return Math.max(leftMax, rightMax) + node.val;
  }

  nextLarger(lowerBound) {
    return this._nextLarger(this.root, lowerBound);
  }

  _nextLarger(node, lowerBound) {
    if (!node) 
      return null;
    }

    if (node.val <= lowerBound) {
      const leftResult = this._nextLarger(node.right, lowerBound);
      return leftResult !== null ? leftResult : node.val;
    

    return this._nextLarger(node.left, lowerBound) || node.val;
  }
