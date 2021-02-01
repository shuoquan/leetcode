package algorithm;

import com.alibaba.fastjson.JSON;
import java.util.Arrays;
import java.util.Stack;
import javax.swing.plaf.nimbus.State;
import com.alibaba.fastjson.JSONObject;

// 单调栈的使用
public class LargestRectangleArea {

  public static int largestRectangleArea(int[] heights) {
    if (heights.length == 0) {
      return 0;
    }
    Stack<Integer> stack = new Stack<>();
    int[] left = new int[heights.length];
    int[] right = new int[heights.length];
    stack.push(0);
    for (int i = 1; i < heights.length; i++) {
      while (stack.size() > 0 && heights[i] < heights[stack.peek()]) {
        right[stack.pop()] = i;
      }
      stack.push(i);
    }
    while (stack.size() > 0) {
      right[stack.pop()] = heights.length;
    }

//    Arrays.stream(right).forEach(System.out::println);
    stack.push(heights.length - 1);
    for (int i = heights.length - 2; i >= 0; i--) {
      while (stack.size() > 0 && heights[i] < heights[stack.peek()]) {
        left[stack.pop()] = i;
      }
      stack.push(i);
    }
    while (stack.size() > 0) {
      left[stack.pop()] = -1;
    }
//    Arrays.stream(left).forEach(System.out::println);
    int max = 0;
    for (int i = 0; i < heights.length; i++) {
      int area = (right[i] - 1 - left[i]) * heights[i];
      if (area > max) {
        max = area;
      }
    }
    return max;
  }

  public static void main(String[] args) {
//    int[] heights = {1, 2, 3, 2, 5, 6};
//    System.out.println(largestRectangleArea(heights));

    Object obj = null;
    System.out.println(JSON.toJSON(obj));
    JSONObject obj1 = new JSONObject();
    obj1.put("name", "bob");
    System.out.println(obj1.getClass().getName());
  }
}
