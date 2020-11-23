package algorithm;

public class SwapPairs {

  public static ListNode swapPairs(ListNode head) {
    int index = 0;
    if (head == null) {
      return head;
    }
    ListNode finalHead = head;
    ListNode backupNode = head;
    while (head != null) {
      if (index % 2 == 0) {
        if (index == 0) {
          if (head.next == null) {
            return head;
          }
          ListNode thirdNode = head.next.next;
          ListNode secondNode = head.next;
          backupNode = head;
          secondNode.next = backupNode;
          backupNode.next = thirdNode;
          finalHead = secondNode;
          head = secondNode;
        } else {
          if (head.next == null) {
            return finalHead;
          }
          ListNode thirdNode = head.next.next;
          ListNode secondNode = head.next;
          ListNode firstNode = head;
          secondNode.next = firstNode;
          firstNode.next = thirdNode;
          backupNode.next = secondNode;
          backupNode = firstNode;
          head = secondNode;
        }
      }
      head = head.next;
      index += 1;
    }
    return finalHead;
  }

  public static void main(String[] args) {
//    ListNode listNode4 = new ListNode(4);
//    ListNode listNode3 = new ListNode(3);
//    ListNode listNode2 = new ListNode(2, listNode3);
//    ListNode listNode1 = new ListNode(1, listNode2);
//    ListNode head = swapPairs(listNode1);
//    while(head!=null){
//      System.out.println(head.val);
//      head = head.next;
//    }

    Integer a = null;
    System.out.println(a.toString());
   }
}
