import {BinaryTree} from "./BinaryTree";
import {Node, TraverseType, TreeNode} from "./common";

describe("Binary Tree", () => {
//    Simple Binary tree:    
//                     5
//                   /   \
//                  2     10
  const simpleTree: BinaryTree<number> = new BinaryTree( 
    Node(5, 
      Node(2), 
      Node(10)
    )
  );

//    Binary tree:    
//                     25
//                   /     \
//                 20       36
//               /   \     /   \
//             10     22  30    40
//           /   \       /     /  \
//          5     12    28    38   48

  const root: TreeNode<number> = Node(25,
      Node(20, 
        Node(10, Node(5), Node(12)),
        Node(22)),
      Node(36, Node(30, Node(28)), Node(40, Node(38), Node(48)))
  )
  const tree: BinaryTree<number> = new BinaryTree(root);

  describe("Binary Tree - setTree, getTree methods", () => {

    it("getTree method return tree", () => {
      expect(simpleTree.getTree()).toEqual({ value: 5, 
        left: { value: 2, left: null, right: null}, 
        right: { value: 10, left: null, right: null}
      });
    });

    it("setTree method update tree", () => {
      expect(simpleTree.setTree(Node(10))).toEqual({root: { value: 10, left: null, right: null}});
    });

    it("getTree return new tree", () => {
      expect(simpleTree.getTree()).toEqual({ value: 10, left: null, right: null});
    });
  });

  describe("Binary Tree - getColumn method", () => {

    it("0 column", () => {
      expect(tree.getColumn(0)).toEqual([25, 22, 30]);
    });

    it("-1 column", () => {
      expect(tree.getColumn(-1)).toEqual([20, 12, 28]);
    });

    it("-2 column", () => {
      expect(tree.getColumn(-2)).toEqual([10]);
    });

    it("-3 column", () => {
      expect(tree.getColumn(-3)).toEqual([5]);
    });

    it("1 column", () => {
      expect(tree.getColumn(1)).toEqual([36, 38]);
    });

    it("2 column", () => {
      expect(tree.getColumn(2)).toEqual([40]);
    });

    it("3 column", () => {
      expect(tree.getColumn(3)).toEqual([48]);
    });
  });

  describe("Binary Tree - traverse method", () => {

    it("Traverse type - InOrder", () => {
      expect(tree.traverse(TraverseType.InOrder)).toEqual([5, 10, 12, 20, 22, 25, 28, 30, 36, 38, 40, 48 ]);
    });

    it("Traverse type - PreOrder", () => {
      expect(tree.traverse(TraverseType.PreOrder)).toEqual([25, 20, 10, 5, 12, 22, 36, 30, 28, 40, 38, 48]);
    });

    it("Traverse type - PostOrder", () => {
      expect(tree.traverse(TraverseType.PostOrder)).toEqual([5, 12, 10, 22, 20, 28, 30, 38, 48, 40, 36, 25]);
    });

    it("Traverse type - Breadth", () => {
      expect(tree.traverse(TraverseType.Breadth)).toEqual([25, 20, 36, 10, 22, 30, 40, 5, 12, 28, 38, 48]);
    });
  });

});
