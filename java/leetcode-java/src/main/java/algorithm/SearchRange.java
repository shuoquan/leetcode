package algorithm;

import java.util.Arrays;

public class SearchRange {

  public static int[] searchRange(int[] nums, int target) {
    int[] result = {-1, -1};
    int start = 0;
    int end = nums.length - 1;
    if (nums.length == 0 || nums[end] < target || nums[0] > target) {
      return result;
    }
    if (nums.length == 1) {
      if (nums[0] != target) {
        return result;
      } else {
        result[0] = 0;
        result[1] = 0;
        return result;
      }
    }
    while (start <= end) {
      int middle = (start + end) / 2;
      if (target > nums[middle]) {
        start = middle + 1;
      } else if (target < nums[middle]) {
        end = middle - 1;
      } else {
        int leftIndex = middle;
        int rightIndex = middle;
        while (leftIndex >= 0 && nums[leftIndex] == target) {
          leftIndex--;
        }
        while (rightIndex < nums.length && nums[rightIndex] == target) {
          rightIndex++;
        }
        result[0] = leftIndex + 1;
        result[1] = rightIndex - 1;
        break;
      }
    }
    return result;
  }

  public static void main(String[] args) {
    int[] nums = {1,5};
    Arrays.stream(searchRange(nums, 4)).forEach(System.out::println);
  }
}
