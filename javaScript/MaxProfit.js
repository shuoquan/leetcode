const maxProfit = function(prices) {
  let buy = -prices[0];
  let sell = 0;
  for (let i = 0; i < prices.length; i++) {
    buy = Math.max(buy, -prices[i]);
    sell = Math.max(sell, buy + prices[i]);
  }
  return sell;
};
console.log(maxProfit([7, 6, 5, 3, 6, 4]));
var x = '12';
