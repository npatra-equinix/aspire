package reading_json;

public class Person {
    String name;
    String place;
    String email;
    Address address;

    public Person(String name, String place, String email, Address address) {
        this.name = name;
        this.place = place;
        this.email = email;
        this.address = address;
    }
}
