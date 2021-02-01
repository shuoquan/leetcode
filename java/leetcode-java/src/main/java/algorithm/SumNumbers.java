package algorithm;

public class SumNumbers {

  public static int sumNumbers(TreeNode root) {
    return dfs(root, 0, 0);
  }

  //
  public static int dfs(TreeNode node, int sum, int pathSum) {
    if (node != null) {
      pathSum = pathSum * 10 + node.val;
      if (node.left != null) {
        sum = dfs(node.left, sum, pathSum);
      }
      if (node.right != null) {
        sum = dfs(node.right, sum, pathSum);
      }
      if (node.left == null && node.right == null) {
        sum += pathSum;
        return sum;
      }
    }
    return sum;
  }

  public static void main(String[] args) {
//    TreeNode node2= new TreeNode(2);
//    TreeNode node3 = new TreeNode(3);
//    TreeNode node1 = new TreeNode(1, node2, node3);

//    TreeNode node5= new TreeNode(5);
//    TreeNode node1 = new TreeNode(1);
//    TreeNode node9 = new TreeNode(9, node5, node1);
//    TreeNode node0 = new TreeNode(0);
//    TreeNode node4 = new TreeNode(4, node9, node0);

    TreeNode node1 = new TreeNode(1);
    TreeNode node9 = new TreeNode(9, null, node1);
    TreeNode node0 = new TreeNode(0);
    TreeNode node4 = new TreeNode(4, node9, node0);
    System.out.println(sumNumbers(node4));
  }
}
