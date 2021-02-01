package algorithm;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.Queue;

public class SolutionHome {

  public static int rob(TreeNode root) {
    List<Integer> result = new ArrayList<>();
    List<Integer> isolatedResult = new ArrayList<>();
    if (root == null) {
      return 0;
    }
    result.add(root.val);
    Queue<TreeNode> queue = new LinkedList<TreeNode>();
    int sum = 0;
    if (root.left != null) {
      queue.offer(root.left);
      sum += 1;
    }
    if (root.right != null) {
      queue.offer(root.right);
      sum += 1;
    }
    int count = 0;
    int total = 0;
    int num = 0;
    int isolatedTotal = 0;
    while (queue.size() > 0) {
      if (count == sum) {
        sum = num;
        num = 0;
        count = 0;
        if (result.size() == 1) {
          result.add(Math.max(result.get(result.size() - 1), total));
        } else {
          result
              .add(Math.max(
                  Math.max(result.get(result.size() - 1), total + result.get(result.size() - 2)),
                  total + isolatedResult.get(isolatedResult.size() - 1)));
        }
        isolatedResult.add(isolatedTotal);
        total = 0;
        isolatedTotal = 0;
      }
      TreeNode node = queue.poll();
      count += 1;
      total += node.val;
      if (node.left != null) {
        queue.offer(node.left);
        num += 1;
      }
      if (node.right != null) {
        queue.offer(node.right);
        num += 1;
      }
      if (node.left == null && node.right == null) {
        isolatedTotal += node.val;
      }
    }
    if (result.size() == 1) {
      result.add(Math.max(result.get(result.size() - 1), total));
    } else {
      result
          .add(Math.max(
              Math.max(result.get(result.size() - 1), total + result.get(result.size() - 2)),
              total + isolatedResult.get(isolatedResult.size() - 1)));
    }
    return result.get(result.size() - 1);
  }

  public static void main(String[] args) {
//    Queue<String> queue = new LinkedList<>();
//    queue.offer("a");
//    System.out.println(queue);
//    TreeNode node1 = new TreeNode(1);
//    TreeNode node3 = new TreeNode(3);
//    TreeNode node2 = new TreeNode(2, null, node3);
//    TreeNode node31 = new TreeNode(3, null, node1);
//    TreeNode node32 = new TreeNode(3, node2, node31);

    TreeNode node4 = new TreeNode(4);
    TreeNode node3 = new TreeNode(3);
    TreeNode node1 = new TreeNode(1, null, node4);
    TreeNode node2 = new TreeNode(2, node1, node3);
    System.out.println(rob(node2));

  }
}


