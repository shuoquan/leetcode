package algorithm;

public class AddTwoNumbers {

  public static ListNode addTwoNumbers(ListNode l1, ListNode l2) {
    int plus = 0;
    ListNode root = null;
    ListNode finalRoot = null;
    while (l1 != null && l2 != null) {
      ListNode node = new ListNode((l1.val + l2.val + plus) % 10);
      plus = (l1.val + l2.val + plus) / 10;
      if (root != null) {
        root.next = node;
        root = node;
      } else {
        root = node;
        finalRoot = node;
      }
      l1 = l1.next;
      l2 = l2.next;
    }
    ListNode lastNode = l1 != null ? l1 : l2;
    while (lastNode != null) {
      ListNode node = new ListNode((lastNode.val + plus) % 10);
      plus = (lastNode.val + plus) / 10;
      root.next = node;
      root = node;
      lastNode = lastNode.next;
    }
    if (plus > 0) {
      root.next = new ListNode(plus);
    }
    return finalRoot;
  }

  public static void main(String[] args) {
    ListNode node3 = new ListNode(3);
    ListNode node4 = new ListNode(4, node3);
    ListNode l1 = new ListNode(2, node4);
    ListNode node5 = new ListNode(4);
    ListNode node6 = new ListNode(6, node5);
    ListNode l2 = new ListNode(5, node6);
    ListNode node = addTwoNumbers(l1, l2);
    while (node != null) {
      System.out.println(node.val);
      node = node.next;
    }
  }
}
