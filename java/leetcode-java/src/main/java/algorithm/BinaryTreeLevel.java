package algorithm;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.Queue;
import java.util.Stack;

public class BinaryTreeLevel {
    static public List<List<Integer>> levelOrder(Node root) {
      Queue<Node> queue = new LinkedList<>();
      queue.add(root);
      List<List<Integer>> list = new ArrayList<>();
      List<Integer> childrenList = new ArrayList<>();
      Integer total = 1;
      Integer count = 0;
      if(root != null) {
        while(queue.size() > 0) {
          Node node = queue.poll();
          System.out.println(node.val);
          childrenList.add(node.val);
          count += 1;
          if(node.children != null) {
            for(Node childNode : node.children) {
              queue.add(childNode);
            }
          }
          if(count == total) {
            list.add(childrenList);
            childrenList = new ArrayList<>();
            total = queue.size();
            count = 0;
          }
        }
      }
      return list;
    }

  public static void main(String[] args) {
    Node root = new Node(1);
    Node node1 = new Node(3);
    Node node2 = new Node(2);
    Node node3 = new Node(4);
    Node node4 = new Node(5);
    Node node5 = new Node(6);
    List<Node> layer1 = new ArrayList<>();
    layer1.add(node1);
    layer1.add(node2);
    layer1.add(node3);
    List<Node> layer2 = new ArrayList<>();
    layer2.add(node4);
    layer2.add(node5);
    root.children = layer1;
    node1.children = layer2;
//    for(Node node : root.children) {
//      System.out.println(node.val);
//    }
    System.out.println(levelOrder(root));
   }
}
