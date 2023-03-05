package verify_email;

public class Address {

    String street1;
    String street2;
    String street3;

    Address(){
        street1 = "st. johns road";
        street2 = "indira nagar";
        street3 = "church street";
    }

    Address(String st1, String st2, String st3){
        street1 = st1;
        street2 = st2;
        street3 = st3;
    }

    Address(Address Addr){
        this.street1 = Addr.street1;
        this.street2 = Addr.street2;
        this.street3 = Addr.street3;
    }
}
