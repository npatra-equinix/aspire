package verify_email;

public class Main {
    public static void main(String[] args) {

        Address addr1 = new Address();
        Person Rabin = new Person("Rabin", addr1, "thiery@gamil.com", "8833445566", 533000, null);
        Person  shub = new Person(" shub", addr1, "henry@gamil.com", "5566334455", 330000, Rabin);
        Person sanskar = new Person("sanskar", addr1, "saka.@gamil.com", "007", 300000,  shub);

        sanskar.printHeirarchy();
        Rabin.verifyEmail();
        sanskar.verifyPhone();
    }
}
