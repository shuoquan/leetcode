package algorithm;

import java.util.ArrayList;
import java.util.List;

public class NextLargerNodes {

  public static int[] nextLargerNodes(ListNode head) {
    List<Integer> list = new ArrayList<>();
    while (head != null) {
      ListNode cur = head;
      int value = head.val;
      cur = cur.next;
      while (cur != null && cur.val <= value) {
        cur = cur.next;
      }
      list.add(cur == null ? 0 : (cur.val <= value ? 0 : cur.val));
      head = head.next;
    }
    int[] result = new int[list.size()];
    for (int i = 0; i < list.size(); i++) {
      result[i] = list.get(i);
    }
    System.out.println(list);
    return result;
  }

  public static void main(String[] args) {
//    ListNode listNode5 = new ListNode(5);
//    ListNode listNode3 =new ListNode(3, listNode5);
//    ListNode listNode4 = new ListNode(4, listNode3);
//    ListNode listNode7 = new ListNode(7, listNode4);
//    ListNode listNode2 = new ListNode(2, listNode7);
//    System.out.println(nextLargerNodes(listNode2));

    ListNode listNode3 = new ListNode(3);
    ListNode listNode31 = new ListNode(3, listNode3);
    System.out.println(nextLargerNodes(listNode31));
  }
}
