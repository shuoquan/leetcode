package algorithm;

import java.util.ArrayList;
import java.util.Stack;

public class BinaryTreeSearch {

  public static ArrayList<Integer> middleBinarySearch(TreeNode treeNode) {
    TreeNode root = treeNode;
    Stack<TreeNode> stack = new Stack<>();
    ArrayList<Integer> arrayList = new ArrayList<>();
    if (treeNode == null) {
      return arrayList;
    }
    stack.push(treeNode);
    while (treeNode.left != null) {
      stack.push(treeNode.left);
      treeNode = treeNode.left;
    }
    while (stack.size() > 0) {
      TreeNode node = stack.pop();
      arrayList.add(node.val);
      if (node.right != null) {
        stack.push(node.right);
        TreeNode rightNode = node.right;
        while (rightNode.left != null) {
          stack.push(rightNode.left);
          rightNode = rightNode.left;
        }
      }
    }
    return arrayList;
  }

  public static void main(String[] args) {
    TreeNode treeNode6 = new TreeNode(6);
    TreeNode treeNode7 = new TreeNode(7);
    TreeNode treeNode4 = new TreeNode(4);
    TreeNode treeNode9 = new TreeNode(9);
    TreeNode treeNode8 = new TreeNode(8);
    TreeNode treeNode2 = new TreeNode(2, treeNode7, treeNode4);
    TreeNode treeNode5 = new TreeNode(5, treeNode6, treeNode2);
    TreeNode treeNode1 = new TreeNode(1, treeNode9, treeNode8);
    TreeNode treeNode3 = new TreeNode(3, treeNode5, treeNode1);
    System.out.println(middleBinarySearch(treeNode3));
  }
}
