package storeing_json;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;

import org.json.JSONArray;
import org.json.JSONObject;

import person.Person;

public class Main {
    public static String JSON_FILE = "input.json";

    public static void main(String[] args) {
        try {
            String jsonString = Files.readString(Paths.get(JSON_FILE));
            ArrayList<Person> persons = parse(jsonString);
            System.out.println(persons);
        } catch (IOException e) {
            System.err.println("Error reading JSON file, make sure it is in place");
        }
    }

    public static ArrayList<Person> parse(String jsonString) {
        JSONArray jsonArray = new JSONArray(jsonString);
        ArrayList<Person> persons = new ArrayList<>();
        for (Object obj : jsonArray) {
            JSONObject personJson = (JSONObject) obj;
            String name = personJson.getString("name");
            String email = personJson.getString("email");
            String phone = personJson.getString("phone");
            ArrayList<String> address = new ArrayList<>();
            JSONArray addressJson = personJson.getJSONArray("address");
            for (Object addr : addressJson) {
                address.add((String) addr);
            }
            Person person = createPerson(name, email, phone, address);
            persons.add(person);
        }
        return persons;
    }

    public static Person createPerson(String name, String email, String phone, ArrayList<String> address) {
        return new Person(name, email, phone, address);
    }
}
