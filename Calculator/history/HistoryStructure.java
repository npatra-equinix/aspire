package Calculator.history;



public class HistoryStructure {

    public String method,number1,number2,result;

   public  HistoryStructure(String method,String number1,String number2,String result)
   {
       this.method=method;
       this.number1=number1;
       this.number2=number2;
       this.result=result;
   }
    public  HistoryStructure(String method,String result)
    {
        this.method=method;
        this.result=result;

    }


}
