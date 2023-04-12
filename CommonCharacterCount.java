import java.util.LinkedList;
import java.util.List;

public class CommonCharacterCount {
    public static void main(String[] args) {
        String s1 = "aabcc";
        String s2 = "adcaa";

        int count = solution(s1, s2); 
        System.out.println(count);
    }

    public static int solution(String s1, String s2) {
        int count = 0; 

        List<Character> s2List = new LinkedList<>(); 

        for(Character c: s2.toCharArray()) {
            s2List.add(c);
        }

        System.out.println("s2List >>> " + s2List);

        for(Character c: s1.toCharArray()) {
            if(s2List.contains(c)) count++;
        }

        return count; 
    }
}