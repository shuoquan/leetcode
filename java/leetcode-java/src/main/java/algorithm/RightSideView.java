package algorithm;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.Queue;

public class RightSideView {

  public static List<Integer> rightSideView(TreeNode root) {
    List<Integer> list = new ArrayList<>();
    if (root == null) {
      return list;
    }
    list.add(root.val);
    Queue<TreeNode> queue = new LinkedList<>();
    Queue<TreeNode> tempQueue = new LinkedList<>();
    if (root.left != null) {
      queue.add(root.left);
    }
    if (root.right != null) {
      queue.add(root.right);
    }
    while (queue.size() > 0) {
      TreeNode treeNode = queue.poll();
      int value = treeNode.val;
      if (treeNode.left != null) {
        tempQueue.add(treeNode.left);
      }
      if (treeNode.right != null) {
        tempQueue.add(treeNode.right);
      }
      if (queue.size() == 0) {
        queue = tempQueue;
        tempQueue = new LinkedList<>();
        list.add(value);
      }
    }
    return list;
  }

  public static void main(String[] args) {
    TreeNode treeNode4 = new TreeNode(4);
    TreeNode treeNode3 = new TreeNode(3, null, treeNode4);
    TreeNode treeNode5 = new TreeNode(5);
    TreeNode treeNode2 = new TreeNode(2, null, treeNode5);
    TreeNode treeNode1 = new TreeNode(1, treeNode2, treeNode3);
    System.out.println(rightSideView(
        treeNode1
    ));
  }
}
