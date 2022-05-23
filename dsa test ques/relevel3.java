/* package whatever; // don't place package name! */

import java.util.*;
import java.lang.*;
import java.io.*;

/* Name of the class has to be "Main" only if the class is public. */
class relevel3
{
	public static void main (String[] args) throws java.lang.Exception
	{
		// your code goes here
        Scanner scn = new Scanner(System.in);
        int n = scn.nextInt();
        int[] herosArr = new int[n];
        for(int i=0; i<herosArr.length; i++){
            herosArr[i] = scn.nextInt();
        }
        int[] villArr = new int[n];
        for(int i=0; i<villArr.length; i++){
            villArr[i] = scn.nextInt();
        }
        int q = scn.nextInt();
        String[] qArr = new String[q];
        for(int i=0; i<qArr.length; i++){
            qArr[i] = scn.nextLine();
        }

        System.out.println(herosArr);
        System.out.println(villArr);
        System.out.println(qArr);

        scn.close();
	}
}
