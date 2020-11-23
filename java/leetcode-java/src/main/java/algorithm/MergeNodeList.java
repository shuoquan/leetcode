package algorithm;

public class MergeNodeList {

  public ListNode mergeTwoLists(ListNode l1, ListNode l2) {
    ListNode mergedNode = null;
    while (l1 != null || l2 != null) {
      if (l1 != null && l2 != null) {
        if (mergedNode == null) {
          if (l1.val < l2.val) {
            mergedNode = l1;
            l1 = l1.next;
          } else {
            mergedNode = l2;
            l2 = l2.next;
          }
        } else {
          if (l1.val < l2.val) {
            mergedNode.next = l1;
            l1 = l1.next;
          } else {
            mergedNode.next = l2;
            l2 = l2.next;
          }
        }
      } else if (l1 != null && l2 == null) {
        if (mergedNode == null) {
          mergedNode = l1;
          l1 = l1.next;
        } else {
          mergedNode.next = l1;
          l1 = l1.next;
        }
      } else if (l1 == null && l2 != null) {
        if (mergedNode == null) {
          mergedNode = l2;
          l2 = l2.next;
        } else {
          mergedNode.next = l2;
          l2 = l2.next;
        }
      }
    }
    return mergedNode;
  }

  public static void main(String[] args) {
    ListNode l1 = new ListNode(1);
    ListNode node1 = new ListNode(2);
    l1.next = node1;
    ListNode node2 = new ListNode(4);
    node1.next = node2;
    ListNode l2 = new ListNode(1);
    ListNode node3 = new ListNode(3);
    l2.next = node3;
    ListNode node4 = new ListNode(4);
    node3.next = node4;
    MergeNodeList mergeNodeList = new MergeNodeList();
    ListNode mergedNode = mergeNodeList.mergeTwoLists(l1, l2);
    while (mergedNode != null) {
//      System.out.println("haha");
      System.out.println(mergedNode.val);
      mergedNode = mergedNode.next;
    }
  }
}
