function ListNode(val, next) {
  this.val = val;
  this.next = next;
}
// const reverseList = function(pHead) {
//   if (!pHead) {
//     return pHead;
//   }
//   let newpHead = pHead;
//   let p1 = pHead;
//   let p2 = pHead.next;
//   let flag = true;
//   while (p2) {
//     newpHead = p2;
//     const p3 = p2.next;
//     p2.next = p1;
//     if (flag) {
//       p1.next = null;
//       flag = false;
//     }
//     p1 = p2;
//     p2 = p3;
//   }
//   return newpHead;
// };

const reverseList = function(pHead) {
    let pre = null;
    let cur = pHead;
    while(cur) {
        const next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }
    return pre;
};

let p3 = new ListNode(3);
let p2 = new ListNode(2, p3);
let p1 = new ListNode(1, p2);
console.log(reverseList(p1));
