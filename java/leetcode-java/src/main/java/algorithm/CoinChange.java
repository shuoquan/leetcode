package algorithm;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Comparator;
import java.util.LinkedList;
import java.util.Queue;

public class CoinChange {

  static public int coinChange(int[] coins, int amount) {
    if (coins.length == 0) {
      return -1;
    }
    if (amount == 0) {
      return 0;
    }
    Queue<Integer> queue = new LinkedList<Integer>();
    Integer count = 1;
    Boolean flag = false;
    Integer minCoin = coins[0];
    for (Integer coin : coins) {
      if (amount == coin) {
        flag = true;
        return count;
      }
      if (minCoin > coin) {
        minCoin = coin;
      }
      queue.offer(coin);
    }
    Integer maxCount = amount / minCoin + 1;
    Integer num = 0;
    Integer size = coins.length * coins.length;
    while (queue.size() > 0 && count <= maxCount) {
      Integer currentCoin = queue.poll();
      for (Integer coin : coins) {
        if (currentCoin + coin == amount) {
          flag = true;
          break;
        }
        queue.offer(currentCoin + coin);
        num += 1;
        if (num == size) {
          size = size * coins.length;
          num = 0;
          count += 1;
        }
      }
      if (flag) {
        return count + 1;
      }
    }
    if (flag) {
      return count;
    }
    return -1;
  }

  public static void main(String[] args) {
    int[] coins = {3,2,1};
    Arrays.sort(coins);
    System.out.println(coins);
    for(Integer coin: coins){
      System.out.println(coin);
    }
//    System.out.println(coinChange(coins, 11));
//    Queue<Integer> queue = new LinkedList<Integer>();
//    queue.offer(1);
//    System.out.println(queue.poll());
//    System.out.println(queue.size());
  }
}
