package algorithm;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.Queue;
import java.util.Stack;

public class ZigzagLevelOrder {

  public static List<List<Integer>> zigzagLevelOrder(TreeNode root) {
    List<List<Integer>> result = new ArrayList<>();
    int flag = 0;
    if (root == null) {
      return new ArrayList<>();
    }
    List<Integer> list = new ArrayList<>();
    list.add(root.val);
    result.add(list);
    list = new ArrayList<>();
    Stack<TreeNode> stack = new Stack<>();
    Stack<TreeNode> tempStack = new Stack<>();
//    Queue<TreeNode> queue = new LinkedList<>();
    if (root.left != null) {
      stack.add(root.left);
    }
    if (root.right != null) {
      stack.add(root.right);
    }
    flag = 1;
    while (stack.size() > 0) {
      TreeNode treeNode = stack.pop();
      list.add(treeNode.val);
      if (flag == 1) {
        if (treeNode.right != null) {
          tempStack.add(treeNode.right);
        }
        if (treeNode.left != null) {
          tempStack.add(treeNode.left);
        }
      } else {
        if (treeNode.left != null) {
          tempStack.add(treeNode.left);
        }
        if (treeNode.right != null) {
          tempStack.add(treeNode.right);
        }
      }
      if (stack.size() == 0) {
        stack = tempStack;
        tempStack = new Stack<TreeNode>();
        result.add(list);
        list = new ArrayList<>();
        flag = flag == 0 ? 1 : 0;
      }
    }
    return result;
  }

  public static void main(String[] args) {
//    TreeNode treeNode7 = new TreeNode(7);
//    TreeNode treeNode15 = new TreeNode(15);
//    TreeNode treeNode20 = new TreeNode(20, treeNode15, treeNode7);
//    TreeNode treeNode9 = new TreeNode(9);
//    TreeNode treeNode3 = new TreeNode(3, treeNode9, treeNode20);

    TreeNode treeNode5 = new TreeNode(5);
    TreeNode treeNode4 = new TreeNode(4);
    TreeNode treeNode2 = new TreeNode(2, treeNode4, treeNode5);
    TreeNode treeNode3 = new TreeNode(3);
    TreeNode treeNode1 = new TreeNode(1, treeNode2, treeNode3);
    System.out.println(zigzagLevelOrder(treeNode1));
  }
}
