package algorithm;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Queue;
import java.util.Stack;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class VerticalTraversal {

  public static List<List<Integer>> verticalTraversal(TreeNode root) {
    if (root == null) {
      return new ArrayList<>();
    }
    List<List<Integer>> result = new ArrayList<>();
    Map<TreeNode, Integer> map = new HashMap<>();
    Map<TreeNode, Integer> map1 = new HashMap<>();
    Map<Integer, List<TreeNode>> map2 = new HashMap<>();
    Stack<TreeNode> stack = new Stack<>();
    stack.push(root);
    map.put(root, 0);
    map1.put(root, 1);
    map2.put(0, new ArrayList<TreeNode>() {{
      add(root);
    }});
    while (stack.size() > 0) {
      TreeNode treeNode = stack.pop();
      if (treeNode.right != null) {
        stack.push(treeNode.right);
        int xposition = map.get(treeNode);
        map.put(treeNode.right, xposition + 1);
        map1.put(treeNode.right, map1.get(treeNode) + 1);
        if (map2.containsKey(xposition + 1)) {
          map2.get(xposition + 1).add(treeNode.right);
        } else {
          map2.put(xposition + 1, new ArrayList<TreeNode>() {{
            add(treeNode.right);
          }});
        }
      }
      if (treeNode.left != null) {
        stack.push(treeNode.left);
        int xposition = map.get(treeNode);
        map.put(treeNode.left, xposition - 1);
        map1.put(treeNode.left, map1.get(treeNode) + 1);
        if (map2.containsKey(xposition - 1)) {
          map2.get(xposition - 1).add(treeNode.left);
        } else {
          map2.put(xposition - 1, new ArrayList<TreeNode>() {{
            add(treeNode.left);
          }});
        }
      }
    }
    Object[] array = map2.keySet().toArray();
    Arrays.sort(array);
    for (Object item : array) {
      List<Integer> list = map2.get(item).stream().sorted(
          (a, b) -> map1.get(a) - map1.get(b) == 0 ? a.val - b.val : map1.get(a) - map1.get(b))
          .map(v -> v.val).collect(
              Collectors.toList());
      result.add(list);
    }
    return result;
  }

  public static void main(String[] args) {
    TreeNode treeNode1 = new TreeNode(1);
    TreeNode treeNode10 = new TreeNode(10);
    TreeNode treeNode9 = new TreeNode(9, treeNode1, treeNode10);
    TreeNode treeNode15 = new TreeNode(15);
    TreeNode treeNode7 = new TreeNode(7);
    TreeNode treeNode20 = new TreeNode(20, treeNode15, treeNode7);
    TreeNode treeNode3 = new TreeNode(3, treeNode9, treeNode20);
//    System.out.println(verticalTraversal(treeNode3));

    List<Integer> arraylist = new ArrayList<Integer>(){{
      add(4);
      add(2);
      add(1);
      add(3);
    }};
    System.out.println(arraylist.stream().map(v->v+1).sorted((a,b)->a-b).collect(Collectors.toList()));

  }
}
