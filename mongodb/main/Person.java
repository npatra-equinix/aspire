package mongodb.main;


class Person {
    int id;
    String name;
    float salary;
    String[] address;

    public Person(int id, String name, float salary, String[] address) {
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.address = address;
    }
}