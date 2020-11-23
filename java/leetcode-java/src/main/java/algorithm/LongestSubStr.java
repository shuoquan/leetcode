package algorithm;

import java.util.ArrayList;

public class LongestSubStr {
  public static int lengthOfLongestSubstring(String s) {
    int max = 0;
    for(int i=0;i<s.length();i++){
      int j = i+1;
      ArrayList<String> arrayList = new ArrayList<>();
      arrayList.add(String.valueOf(s.charAt(i)));
      while(j<s.length()&&!arrayList.contains(String.valueOf(s.charAt(j)))) {
        arrayList.add(String.valueOf(s.charAt(j)));
        j++;
      }
      if(j-i>max){
        max = j - i;
      }
    }
    return max;
  }

  public static void main(String[] args) {
//    ArrayList<Integer> arrayList = new ArrayList<>();
//    arrayList.add(1);
//    System.out.println(arrayList.contains(1));
    System.out.println(lengthOfLongestSubstring("abcabcbb"));
  }
}
