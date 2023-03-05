package verify_email;

import java.util.regex.Matcher;
import java.util.regex.Pattern;
public class Person {

    String name;
    Address Addr;
    String email;
    String phone;
    int salary;
    Person Manager;

    Person(){
        name = "Rabindra";
        Addr = new Address();
        email = "Rabin@gmail.com";
        phone = "+917735589976";
        salary = 800000;
        Manager = null;
    }

    Person(String name, Address Addr, String email, String phone, int salary, Person Manager){
        this.name = name;
        this.Addr = new Address(Addr);
        this.email = email;
        this.phone = phone;
        this.salary = salary;
        this.Manager = Manager;
    }

    public void printHeirarchy(){
        if(this.Manager!=null){
            this.Manager.printHeirarchy();
            System.out.print("-->"+this.name);
        }else{
            System.out.print("Head: "+name);
        }
        System.out.println("");
    }

    public boolean verifyEmail(){

        String regexPattern = "^(?=.{1,64}@)[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-]+)*@"
                + "[^-][A-Za-z0-9-]+(\\.[A-Za-z0-9-]+)*(\\.[A-Za-z]{2,})$";
        Pattern pattern = Pattern.compile(regexPattern);
        Matcher matcher = pattern.matcher(email);
        if(matcher.matches()==true){
            System.out.println("The mail id "+email+" is valid");
        }else{
            System.out.println("The mail id "+email+" is not valid");
        }
        return matcher.matches();
    }
    public boolean verifyPhone(){

        String regex = "^\\d{10}$";
        Pattern pattern = Pattern.compile(regex);
        Matcher matcher = pattern.matcher(phone);
        if(matcher.matches()==true){
            System.out.println("The phone number "+phone+" is valid");
        }else{
            System.out.println("The phone number "+phone+" is not valid");
        }
        return matcher.matches();
    }
}