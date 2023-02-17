public class OppsConcept {
    public static void main(String[] args) {
        Volvo obj = new Volvo();
        obj.drive();
        obj.gearchange();
        obj.drive(8);

    }
}

class Volvo extends Car {
    void drive() {
        System.out.println("drive safely");
    }

    void drive(int num) {
        System.out.println("Number of drivers" + " " + num);
    }
}

abstract class Car {
    Car() {
        System.out.println("Car is built");
    }

    abstract void drive();

    void gearchange() {
        System.out.println("gear changed");
    }
}
