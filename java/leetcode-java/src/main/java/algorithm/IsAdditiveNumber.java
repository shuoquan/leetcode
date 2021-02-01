package algorithm;

public class IsAdditiveNumber {

  public static boolean isAdditiveNumber(String num) {
    for (int i = 1; i <= num.length() - 2; i++) {
      for (int j = i + 1; j <= num.length() - 1; j++) {
        String x = num.substring(0, i);
        String y = num.substring(i, j);
        System.out.println(x);
        System.out.println(y);
        if (x.length() > 1 && x.charAt(0) == '0') {
          break;
        }
        if (y.length() > 1 && y.charAt(0) == '0') {
          break;
        }
        Integer a = Integer.parseInt(x);
        Integer b = Integer.parseInt(y);
        Integer c = a + b;
        int start = j;
        int end = start + c.toString().length();
        while (start <= num.length() && end <= num.length()) {
          String z = num.substring(start, end);
          if (z.length() > 1 && z.charAt(0) == '0') {
            break;
          }
          if (c == Integer.parseInt(z)) {
            if (end == num.length()) {
              return true;
            }
            a = b;
            b = c;
            c = a + b;
            start = end;
            end = start + c.toString().length();
          } else {
            break;
          }
        }
      }
    }
    return false;
  }

  public static void main(String[] args) {
//    System.out.println(Integer.parseInt("12"));
//    System.out.println("123".substring(0, 4));
//    Integer a = 2;
//    Integer b = 2;
//    System.out.println(a == b);
//    System.out.println("12".charAt(1) == '2');
//    System.out.println(isAdditiveNumber("198019823962"));
//    System.out.println(new Integer(9801982396));
  }
}
