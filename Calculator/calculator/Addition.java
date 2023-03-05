package Calculator.calculator;


import Calculator.history.*;
public final class Addition {

    public static int add(int a, int b)
    {
        int res=a+b;
        HistoryStructure hs=new HistoryStructure("add",a+"",b+"",res+" ");
        MyQueue.add(hs);
        return res;
    }
    public static double add(double a, double b)
    {
        double res=a+b;
        HistoryStructure hs=new HistoryStructure("add",a+"",b+"",res+" ");
        MyQueue.add(hs);
        return res;
    }

}
