//https://www.nowcoder.com/practice/54275ddae22f475981afa2244dd448c6?tpId=190&tqId=35202&rp=1&ru=%2Factivity%2Foj&qru=%2Fta%2Fjob-code-high-rd%2Fquestion-ranking&tab=answerKey
//用两个栈来实现一个队列，完成队列的Push和Pop操作。 队列中的元素为int类型。
const inStack = [];
const outStack = [];
function push(node) {
  inStack.push(node);
}
function pop() {
  while (inStack.length) {
    outStack.push(inStack.pop());
  }
  const temp = outStack.pop();
  while (outStack.length) {
    inStack.push(outStack.pop());
  }
  return temp;
}
module.exports = {
  push: push,
  pop: pop,
};
push(12);
