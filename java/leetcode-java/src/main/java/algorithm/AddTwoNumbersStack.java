package algorithm;

import java.util.Stack;

public class AddTwoNumbersStack {

  public static ListNode addTwoNumbers(ListNode l1, ListNode l2) {
    Stack<ListNode> stackA = new Stack<>();
    Stack<ListNode> stackB = new Stack<>();
    while (l1 != null) {
      stackA.add(l1);
      l1 = l1.next;
    }
    while (l2 != null) {
      stackB.add(l2);
      l2 = l2.next;
    }
    int carryBit = 0;
    ListNode root = null;
    while (stackA.size() > 0 || stackB.size() > 0) {
      int A = 0;
      int B = 0;
      if (stackA.size() > 0) {
        A = stackA.pop().val;
      }
      if (stackB.size() > 0) {
        B = stackB.pop().val;
      }
      if (root == null) {
        root = new ListNode((A + B + carryBit) % 10);
      } else {
        ListNode listNode = new ListNode((A + B + carryBit) % 10);
        ListNode tempListNode = root;
        root = listNode;
        root.next = tempListNode;
      }
      carryBit = (A + B + carryBit) / 10;
    }
    if (carryBit > 0) {
      ListNode listNode = new ListNode(carryBit);
      ListNode tempListNode = root;
      root = listNode;
      root.next = tempListNode;
    }
    return root;
  }

  public static void main(String[] args) {
    ListNode listNode3 = new ListNode(3);
    ListNode listNode4 = new ListNode(4);
    listNode4.next = listNode3;
    ListNode listNode2 = new ListNode(2);
    listNode2.next = listNode4;
    ListNode listNode7 = new ListNode(7);
    listNode7.next = listNode2;

    ListNode listNode41 = new ListNode(4);
    ListNode listNode6 = new ListNode(6);
    listNode6.next = listNode41;
    ListNode listNode5 = new ListNode(5);
    listNode5.next = listNode6;
    ListNode root = addTwoNumbers(listNode7, listNode5);
    while (root != null) {
      System.out.println(root.val);
      root = root.next;
    }
  }
}
