package algorithm;

public class MaxArea {

//  public static int maxArea(int[] height) {
//    int sum = 0;
//    for (int i = 0; i < height.length; i++) {
//      for (int j = i + 1; j < height.length; j++) {
//        int temp = Math.min(height[i], height[j]) * (j - i);
//        if (temp > sum) {
//          sum = temp;
//        }
//      }
//    }
//    return sum;
//  }

  public static int maxArea(int[] height) {
    int i = 0;
    int j = height.length - 1;
    int sum = 0;
    while (i < j) {
      int max = Math.min(height[i], height[j]) * (j - i);
      if (max > sum) {
        sum = max;
      }
      if (height[i] > height[j]) {
        j--;
      } else {
        i++;
      }
    }
    return sum;
  }

  public static void main(String[] args) {
    int[] height = {1, 8, 6, 2, 5, 4, 8, 3, 7};
    System.out.println(maxArea(height));
  }
}
