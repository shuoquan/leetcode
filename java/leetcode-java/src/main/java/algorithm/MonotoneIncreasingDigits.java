package algorithm;

public class MonotoneIncreasingDigits {

  public static int monotoneIncreasingDigits(int N) {
    String str = String.valueOf(N);
    int i = 1;
    while (i < str.length() && str.charAt(i) >= str.charAt(i - 1)) {
      i++;
    }
    if (str.length() == i) {
      return N;
    }
    while (i > 1 && Integer.valueOf(Character.toString(str.charAt(i - 1))) - 1 < Integer
        .valueOf(Character.toString(str.charAt(i - 2)))) {
      i--;
    }
    String newStr = str.substring(0, i - 1)
        .concat(String.valueOf(Integer.valueOf(Character.toString(str.charAt(i - 1))) - 1));
    for (int j = i; j < str.length(); j++) {
      newStr += '9';
    }
    return Integer.valueOf(newStr);
  }

  public static void main(String[] args) {
    System.out.println(monotoneIncreasingDigits(33332));
  }
}
