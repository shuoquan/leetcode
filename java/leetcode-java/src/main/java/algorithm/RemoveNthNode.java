package algorithm;

import java.util.List;

public class RemoveNthNode {

  public static ListNode removeNthFromEnd(ListNode head, int n) {
    ListNode leftNode = head;
    ListNode rightNode = head;
    while (n > 0) {
      rightNode = rightNode.next;
      n--;
    }
    if (rightNode == null) {
      return leftNode.next;
    }
    while (rightNode.next != null) {
      leftNode = leftNode.next;
      rightNode = rightNode.next;
    }
    ListNode temp = leftNode.next.next;
    leftNode.next = temp;
    return head;
  }

  public static void main(String[] args) {
//    ListNode listNode5 = new ListNode(5);
//    ListNode listNode4 = new ListNode(4, listNode5);
//    ListNode listNode3 = new ListNode(3, listNode4);
//    ListNode listNode2 = new ListNode(2, listNode3);
//    ListNode listNode1 = new ListNode(1, listNode2);
//    ListNode root = removeNthFromEnd(listNode1, 2);
//    while (root != null) {
//      System.out.println(root.val);
//      root = root.next;
//    }

    Integer a = null;
    System.out.println(a.toString());
  }
}
