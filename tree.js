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

 
  sumValues() {
    return this._sumValues(this.root);
  }

  _sumValues(node) {
    if (!node) {
      return 0;
    }

    let sum = node.val;

    for (const child of node.children) {
      sum += this._sumValues(child);
    }

    return sum;
  }

  
  countEvens() {
    return this._countEvens(this.root);
  }

  _countEvens(node) {
    if (!node) {
      return 0;
    }

    let count = node.val % 2 === 0 ? 1 : 0;

    for (const child of node.children) {
      count += this._countEvens(child);
    }

    return count;
  }


  numGreater(lowerBound) {
    return this._numGreater(this.root, lowerBound);
  }

  _numGreater(node, lowerBound) {
    if (!node) {
      return 0;
    }

    let count = node.val > lowerBound ? 1 : 0;

    for (const child of node.children) {
      count += this._numGreater(child, lowerBound);
    }

    return count;
  }
}

module.exports = { Tree, TreeNode };