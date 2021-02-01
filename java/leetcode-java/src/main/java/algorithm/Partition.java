package algorithm;

public class Partition {

  public static ListNode partition(ListNode head, int x) {
    if (head == null) {
      return head;
    }
    ListNode smallerNodeHead = null;
    ListNode smallerNode = null;
    ListNode biggerNodeHead = null;
    ListNode biggerNode = null;
    while (head != null) {
      if (head.val < x) {
        if (smallerNodeHead == null) {
          smallerNodeHead = head;
          smallerNode = head;
        } else {
          smallerNode.next = head;
          smallerNode = smallerNode.next;
        }
      } else {
        if (biggerNodeHead == null) {
          biggerNodeHead = head;
          biggerNode = head;
        } else {
          biggerNode.next = head;
          biggerNode = biggerNode.next;
        }
      }
      ListNode temp = head;
      head = head.next;
      temp.next = null;
    }
    if (smallerNodeHead != null) {
      smallerNode.next = biggerNodeHead;
      return smallerNodeHead;
    } else {
      return biggerNodeHead;
    }
  }

  public static void main(String[] args) {
    ListNode listNode2 = new ListNode(2);
    ListNode listNode5 = new ListNode(5, listNode2);
    ListNode listNode22 = new ListNode(2, listNode5);
    ListNode listNode3 = new ListNode(3, listNode22);
    ListNode listNode4 = new ListNode(4, listNode3);
    ListNode listNode1 = new ListNode(1, listNode4);
    ListNode root = partition(listNode1, 3);
    while (root != null) {
      System.out.println(root.val);
      root = root.next;
    }
  }
}
