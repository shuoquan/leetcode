// https://www.nowcoder.com/practice/64b4262d4e6d4f6181cd45446a5821ec?tpId=188&tqId=37524&rp=1&ru=%2Factivity%2Foj&qru=%2Fta%2Fjob-code-high-week%2Fquestion-ranking&tab=answerKey
// 股票买入卖出问题
// 假设你有一个数组，其中第\ i i 个元素是股票在第\ i i 天的价格。
// 你有一次买入和卖出的机会。（只有买入了股票以后才能卖出）。请你设计一个算法来计算可以获得的最大收益。

function maxProfit(prices) {
  let minValue = prices[0];
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minValue) minValue = prices[i];
    maxProfit = Math.max(maxProfit, prices[i] - minValue);
  }
  return maxProfit;
}
