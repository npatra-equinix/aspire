package Calculator.history;


import java.util.ArrayList;
import java.util.LinkedList;

    public class MyQueue {
        private static ArrayList<HistoryStructure> arr = new ArrayList<>();

        public static void add(HistoryStructure hs)
        {
            if(arr.size()==5) arr.remove(0);
            arr.add(hs);
        }

        public static HistoryStructure remove(HistoryStructure hs)
        {
            return arr.remove(0);
        }

        public static String peek()
        {
            if(arr.size()==0) return "Empty";

            HistoryStructure hs=arr.get(0);
            return hs.method +" "+hs.number1+" "+hs.number2 + " result = " +hs.result;
        }

        public static String get(int ind)
        {
            if(ind>4) return " only last 5 calculations are stored";

            HistoryStructure hs=arr.get(ind);
            if(hs.method.equals("Student add"))
                return hs.method +" result = " +hs.result;
            else
                return hs.method +" "+hs.number1+" "+hs.number2 + " result = " +hs.result;

        }

        public static int size()
        {
            return arr.size();
        }

        public static boolean isEmpty()
        {
            return arr.size()==0;
        }


        public static void displayAll()
        {
            for(HistoryStructure hs:arr)
            {
                if(hs.method.equals("Student add"))
                    System.out.println(hs.method +" result = " +hs.result);
                else
                    System.out.println(hs.method +" "+hs.number1+" "+hs.number2 + " result = " +hs.result);
            }
        }

    }
