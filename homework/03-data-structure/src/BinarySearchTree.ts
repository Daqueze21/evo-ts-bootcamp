import {BinaryTree, BinaryTreeInt, } from "./BinaryTree";
import {TreeNode} from "./common";

export interface BinarySearchTreeInt extends BinaryTreeInt<number> {
  has(value: number): boolean;
}

export class BinarySearchTree extends BinaryTree<number> implements BinarySearchTreeInt {

  has(value: number): boolean {
    let hasValue: boolean = false;

    function checkValue(node: TreeNode<number>) {
      if (node.value === value) { return hasValue = true; };
      if (node.left) { checkValue(node.left) };
      if (node.right) { checkValue(node.right) };
    }

    checkValue(this.root);
    return hasValue;
  }

};

