export function Node(value: number, left: TreeNode<number>| null = null, right: TreeNode<number>| null = null) {
  return new TreeNode(value, left, right)
};

export enum TraverseType {
  InOrder,
  PreOrder,
  PostOrder,
  Breadth
}

export class TreeNode<T> {
  readonly value: T
  readonly left: TreeNode<T> | null
  readonly right: TreeNode<T> | null;

  constructor(value: T, left: TreeNode<T>| null =null, right: TreeNode<T>| null = null) {
    this.value = value
    this.left = left
    this.right = right
  }
}