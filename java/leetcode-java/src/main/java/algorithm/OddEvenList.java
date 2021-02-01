package algorithm;

public class OddEvenList {

  public static ListNode oddEvenList(ListNode head) {
    if (head == null) {
      return head;
    }
    int index = 1;
    ListNode oddRoot = null;
    ListNode finalOddRoot = null;
    ListNode evenRoot = null;
    ListNode finalEvenRoot = null;
    while (head != null) {
      if (index % 2 == 1) {
        if (oddRoot == null) {
          oddRoot = head;
          finalOddRoot = oddRoot;
        } else {
          oddRoot.next = head;
          oddRoot = oddRoot.next;
        }
      } else {
        if (evenRoot == null) {
          evenRoot = head;
          finalEvenRoot = evenRoot;
        } else {
          evenRoot.next = head;
          evenRoot = evenRoot.next;
        }
      }
      index += 1;
      ListNode tempNode = head;
      head = head.next;
      tempNode.next = null;
    }
    oddRoot.next = finalEvenRoot;
    return finalOddRoot;
  }

  public static void main(String[] args) {
    ListNode listNode5 = new ListNode(5);
    ListNode listNode4 = new ListNode(4);
    listNode4.next = listNode5;
    ListNode listNode3 = new ListNode(3);
    listNode3.next = listNode4;
    ListNode listNode2 = new ListNode(2);
    listNode2.next = listNode3;
    ListNode listNode1 = new ListNode(1);
    listNode1.next = listNode2;
    ListNode root = oddEvenList(listNode1);
    while (root != null) {
      System.out.println(root.val);
      root = root.next;
    }
  }
}
