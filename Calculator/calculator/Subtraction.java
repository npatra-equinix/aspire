package Calculator.calculator;


import Calculator.history.HistoryStructure;
import Calculator.history.MyQueue;

public final class Subtraction {
    public static int subtract(int a,int b)
    {
        int res=a-b;
        HistoryStructure hs=new HistoryStructure("subtract",a+"",b+"",res+" ");
        MyQueue.add(hs);
        return res;
    }
    public static double subtract(double a,double b)
    {
        double res=a-b;
        HistoryStructure hs=new HistoryStructure("subtract",a+"",b+"",res+" ");
        MyQueue.add(hs);
        return res;
    }
}
