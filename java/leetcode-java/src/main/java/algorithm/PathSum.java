package algorithm;

import java.util.ArrayList;
import java.util.List;

public class PathSum {

  public static List<List<Integer>> pathSum(TreeNode root, int sum) {
    return dfs(root, sum, new ArrayList<Integer>(), new ArrayList<>(), 0);
  }

  public static List<List<Integer>> dfs(TreeNode node, int sum, List<Integer> path,
      List<List<Integer>> results, int pathSum) {
    if (node != null) {
      int newPathSum = pathSum + node.val;
      List<Integer> newPath = new ArrayList<>(path);
      newPath.add(node.val);
      if (node.left != null) {
        dfs(node.left, sum, newPath, results, newPathSum);
      }
      if (node.right != null) {
        dfs(node.right, sum, newPath, results, newPathSum);
      }
      if (node.left == null && node.right == null) {
        if (sum == newPathSum) {
          results.add(newPath);
          return results;
        }
      }
    }
    return results;
  }

  public static void main(String[] args) {
    TreeNode node7 = new TreeNode(7);
    TreeNode node2 = new TreeNode(2);
    TreeNode node11 = new TreeNode(11, node7, node2);
    TreeNode node5 = new TreeNode(5);
    TreeNode node1 = new TreeNode(1);
    TreeNode node41 = new TreeNode(4, node5, node1);
    TreeNode node13 = new TreeNode(13);
    TreeNode node8 = new TreeNode(8, node13, node41);
    TreeNode node42 = new TreeNode(4, node11, null);
    TreeNode node52 = new TreeNode(5, node42, node8);
    System.out.println(pathSum(node52, 22));

  }
}
