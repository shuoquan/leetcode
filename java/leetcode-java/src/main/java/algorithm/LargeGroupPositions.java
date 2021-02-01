package algorithm;

import java.util.ArrayList;
import java.util.List;

public class LargeGroupPositions {

  public static List<List<Integer>> largeGroupPositions(String s) {
    List<List<Integer>> result = new ArrayList<>();
    if (s.length() <= 2) {
      return result;
    }
    int count = 1;
    char c = s.charAt(0);
    int last = 0;
    for (int i = 1; i < s.length(); i++) {
      if (s.charAt(i) == c) {
        count += 1;
      } else {
        if (count >= 3) {
          List<Integer> list = new ArrayList<>();
          list.add(last);
          list.add(i - 1);
          result.add(list);
        }
        count = 1;
        c = s.charAt(i);
        last = i;
      }
    }
    if (count >= 3) {
      List<Integer> list = new ArrayList<>();
      list.add(last);
      list.add(s.length() - 1);
      result.add(list);
    }
    return result;
  }

  public static void main(String[] args) {
    System.out.println(largeGroupPositions("111"));
  }
}
