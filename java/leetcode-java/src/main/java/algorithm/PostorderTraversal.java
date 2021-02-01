package algorithm;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Hashtable;
import java.util.List;
import java.util.Stack;

public class PostorderTraversal {

  // 二叉树的后序遍历，非递归 LeetCode 145
  public static List<Integer> postorderTraversal(TreeNode root) {
    List<Integer> list = new ArrayList<>();
    if (root == null) {
      return list;
    }
    Stack<TreeNode> stack = new Stack<>();
    HashMap<TreeNode, Integer> hashMap = new HashMap<>();
    while (root != null) {
      stack.add(root);
      root = root.left;
    }
    while (stack.size() > 0) {
      TreeNode treeNode = stack.peek();
      if (treeNode.right == null) {
        list.add(treeNode.val);
        stack.pop();
      }
      if (treeNode.right != null) {
        if (hashMap.get(treeNode.right) != null) {
          list.add(treeNode.val);
          stack.pop();
        } else {
          hashMap.put(treeNode.right, 1);
          TreeNode newTree = treeNode.right;
          while (newTree != null) {
            stack.add(newTree);
            newTree = newTree.left;
          }
        }
      }
    }
    return list;
  }

  public static void main(String[] args) {
    TreeNode treeNode3 = new TreeNode(3);
    TreeNode treeNode2 = new TreeNode(2, treeNode3, null);
    TreeNode treeNode1 = new TreeNode(1, null, treeNode2);
    System.out.println(postorderTraversal(treeNode1));
  }
}
