import java.util.*;
import java.lang.*;
import java.io.*;

class relevel2
{
	public static void main (String[] args) throws java.lang.Exception
	{
        Scanner scn = new Scanner(System.in);
        int N = scn.nextInt();
        int[] D = new int[N];
        for(int i=0; i<D.length;i++){
            D[i] = scn.nextInt();
        }

        ArrayList<Integer> rem = new ArrayList<>();
        for(int i=0; i<N; i++){
            rem.add(i);
        }

        ArrayList<Integer> res = new ArrayList<>();
        res.add(D[0]);
        rem.remove(D[0]);
        System.out.println(rem);
        System.out.println(res);

        for(int i=1; i<D.length ; i++){
            int ele = D[i];
            if(ele == D[i-1]){
                System.out.println("here");
                int max = Integer.MIN_VALUE;
                for(int num : rem){
                    if(num<ele){
                        max = Math.max(num,max);
                    }
                }
                if(max!=Integer.MIN_VALUE){
                    System.out.println("here");
                    res.add(max);
                    for(int y = rem.size()-1; y>=0; y--){
                        int ch = max;
                        if(ch==rem.get(y)){
                            rem.remove(y);
                        }
                    }
                    System.out.println("res" + res);
                    System.out.println("rem" + rem);
                }
            }else{
                res.add(ele);
                for(int y = rem.size()-1; y>=0; y--){
                    int ch = ele;
                    int val = rem.get(y);
                    if(ch==val){
                        System.out.println(y);
                        System.out.println(rem.get(y));
                        rem.remove(y);
                    }
                }
                System.out.println("else");
                System.out.println( "res" + res);
                System.out.println( "rem" +rem);
            }    
            rem.remove(ele);
        }
        
        // System.out.println(res);

        scn.close();
        
	}
}
