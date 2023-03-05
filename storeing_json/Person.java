package storeing_json;

import java.util.ArrayList;

public class Person {
    private String name;
    private String email;
    private String phone;
    private ArrayList<String> address;

    public Person(String name, String email, String phone, ArrayList<String> address) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.address = address;
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("{\n")
          .append("name: ").append(name).append("\n")
          .append("email: ").append(email).append("\n")
          .append("phone: ").append(phone).append("\n")
          .append("address: ");
        for (String part : address) {
            sb.append(part).append(" ");
        }
        sb.append("\n}\n");
        return sb.toString();
    }
}
