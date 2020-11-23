package algorithm;

import java.util.ArrayList;
import java.util.Stack;
import java.util.*;

public class Bolan {

  // 逆波兰表达式 LeetCode 150
  // String判断是否相对使用equals而不是 ==
  public int evalRPN(String[] tokens) {
    Stack<Integer> stack = new Stack<Integer>();
    for (String s : tokens) {
      System.out.println(s.getClass().getName());
      if (!s.equals("+") && !s.equals("-") && !s.equals("*") && !s.equals("/")) {
        stack.push(Integer.parseInt(s));
      } else {
        Integer rightParam = stack.pop();
        Integer leftParam = stack.pop();
        if (s.equals("+")) {
          stack.push(leftParam + rightParam);
        } else if (s.equals("-")) {
          stack.push(leftParam - rightParam);
        } else if (s.equals("*")) {
          stack.push(leftParam * rightParam);
        } else if (s.equals("/")) {
          stack.push(leftParam / rightParam);
        }
      }
    }
    return stack.pop();
  }

  public static void main(String[] args) {
    String[] list = new String[]{"4", "13", "5", "/", "+"};
    Bolan bolan = new Bolan();
    Integer result = bolan.evalRPN(list);
    System.out.println(result);
    String param = "+";
    String param1 = new String("+");
    System.out.println(param == param1);
    System.out.println(param.equals(param1));
  }
}
