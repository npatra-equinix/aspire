package Calculator;

import Calculator.calculator.*;
import Calculator.student.Student;
import Calculator.history.*;
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {



        System.out.println(Subtraction.subtract(63,60));
        System.out.println(Addition.add(49.0,61));
        System.out.println(Multiplication.multiply(6,9));
        System.out.println(Division.divide(9,3));


        Student s1=new Student("Rabi","4484",69);
        Student s2=new Student("Shubh","4485",99);
        Student s3=new Student("Sanskar","4486",80);
        Student s4=new Student("Sumeet","4487",90);

        ArrayList<Student> student=new ArrayList<>();

        student.add(s1);
        student.add(s2);
        student.add(s3);
        student.add(s4);


        MyQueue.displayAll();
        System.out.println();
        System.out.println(MyQueue.get(2));

    }
}