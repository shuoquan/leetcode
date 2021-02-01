package algorithm;

import java.util.LinkedList;
import java.util.Queue;
import jdk.internal.org.objectweb.asm.TypeReference;

public class LowestCommonAncestor {

  public static TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
    while (true) {
      if (root == p || root == q) {
        return root;
      }
      TreeNode treeNode1 = null;
      TreeNode treeNode2 = null;
      Queue<TreeNode> queue = new LinkedList<>();
      Queue<TreeNode> tempQueue = new LinkedList<>();
      queue.add(p);
      while (queue.size() > 0) {
        TreeNode treeNode = queue.poll();
        if (treeNode.left != null) {
          tempQueue.add(treeNode.left);
          if (treeNode.left == q) {
            return p;
          }
        }
        if (treeNode.right != null) {
          tempQueue.add(treeNode.right);
          if (treeNode.right == q) {
            return p;
          }
        }
        if (queue.size() == 0) {
          queue = tempQueue;
          tempQueue = new LinkedList<>();
        }
      }
      queue = new LinkedList<>();
      tempQueue = new LinkedList<>();
      queue.add(q);
      while (queue.size() > 0) {
        TreeNode treeNode = queue.poll();
        if (treeNode.left != null) {
          tempQueue.add(treeNode.left);
          if (treeNode.left == p) {
            return q;
          }
        }
        if (treeNode.right != null) {
          tempQueue.add(treeNode.right);
          if (treeNode.right == p) {
            return q;
          }
        }
        if (queue.size() == 0) {
          queue = tempQueue;
          tempQueue = new LinkedList<>();
        }
      }
      queue.add(root);
      while (queue.size() > 0 && (treeNode1 == null || treeNode2 == null)) {
        TreeNode treeNode = queue.poll();
        if (treeNode.left != null) {
          tempQueue.add(treeNode.left);
          if (treeNode.left == p) {
            treeNode1 = treeNode;
          }
          if (treeNode.left == q) {
            treeNode2 = treeNode;
          }
        }
        if (treeNode.right != null) {
          tempQueue.add(treeNode.right);
          if (treeNode.right == p) {
            treeNode1 = treeNode;
          }
          if (treeNode.right == q) {
            treeNode2 = treeNode;
          }
        }
        if (queue.size() == 0) {
          queue = tempQueue;
          tempQueue = new LinkedList<>();
        }
      }
      if (treeNode1 != treeNode2) {
        p = treeNode1;
        q = treeNode2;
      } else {
        return treeNode1;
      }
    }
  }

  public static void main(String[] args) {
    TreeNode treeNode4 = new TreeNode(4);
    TreeNode treeNode7 = new TreeNode(7);
    TreeNode treeNode2 = new TreeNode(2, treeNode7, treeNode4);
    TreeNode treeNode6 = new TreeNode(6);
    TreeNode treeNode5 = new TreeNode(5, treeNode6, treeNode2);
    TreeNode treeNode0 = new TreeNode(0);
    TreeNode treeNode8 = new TreeNode(8);
    TreeNode treeNode1 = new TreeNode(1, treeNode0, treeNode8);
    TreeNode treeNode3 = new TreeNode(3, treeNode5, treeNode1);
    System.out.println(lowestCommonAncestor(treeNode3, treeNode4, treeNode8).val);
  }
}

