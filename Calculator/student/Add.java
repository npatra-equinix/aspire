package Calculator.student;


import Calculator.history.HistoryStructure;
import Calculator.history.MyQueue;

import java.util.*;
public final class Add {

    public static int add(ArrayList<Student> std)
    {
        int total=0;

        for(Student i:std)
        {
            total+=i.marks;
        }
        HistoryStructure hs=new HistoryStructure("Student add",total+" ");
        MyQueue.add(hs);
        return total;
    }

}