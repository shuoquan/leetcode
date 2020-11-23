package algorithm;

public class ReverseNodeList {

  // 链表旋转 leetcode 61
  public ListNode rotateRight(ListNode head, int k) {
    Integer nodeListLen = 0;
    ListNode node = head;
    while (node != null) {
      nodeListLen += 1;
      node = node.next;
    }
    if (nodeListLen == 0) {  // 空链表的判断
      return head;
    }
    Integer reverseLen = k % nodeListLen;
    if (reverseLen == 0) {   // 不需要翻转的链表
      return head;
    }
    Integer start = 0;
    node = head;
    ListNode originHead = head;
    while (start < nodeListLen - reverseLen - 1) {
      node = node.next;
      start += 1;
    }
    head = node.next;
    ListNode tempNode = node.next;
    start += 1;
    node.next = null;
    while (start < nodeListLen - 1) {
      tempNode = tempNode.next;
      start += 1;
    }
    tempNode.next = originHead;
    return head;
  }

  public static void main(String[] args) {
    ListNode head = new ListNode(1);
    ListNode node1 = new ListNode(2);
    ListNode node2 = new ListNode(3);
    ListNode node3 = new ListNode(4);
    ListNode node4 = new ListNode(5);
    head.next = node1;
    node1.next = node2;
    node2.next = node3;
    node3.next = node4;
    ReverseNodeList reverseNodeList = new ReverseNodeList();
    ListNode newHead = reverseNodeList.rotateRight(head, 2);
    while (newHead != null) {
      System.out.println("haha");
      System.out.println(newHead.val);
      newHead = newHead.next;
    }
  }
}
