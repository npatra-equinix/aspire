public class Reverse_words {
    public static void main(String[] arg){
    String str="Bangalore has a good weather sfhks sfhkshf kshfksjfhkjshfkjhskdjfhkas";
    String res=reverse(str);
    System.out.println(res);
}
public static String reverse(String str){
    int n=str.length();
    String res="";
    String temp="";
    for(int i=n-1;i>=0;i--){
         if(str.charAt(i)==' '){
              int t=temp.length();
              for(int j=t-1;j>=0;j--){
                res=res+temp.charAt(j);
              } 
              res=res+' ';
              temp="";
              continue;
         }
        temp=temp+str.charAt(i);
    }
    int t=temp.length();
    for(int j=t-1;j>=0;j--){
    res=res+temp.charAt(j);
    }
    return res;
}
}