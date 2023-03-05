package reading_json;


import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

import java.io.FileReader;
import java.io.IOException;

public class Main {

    public static void main(String[] args) throws IOException, ParseException {
        JSONParser parser=new JSONParser();
            JSONArray a = (JSONArray) parser.parse(new FileReader("sample.json"));


        for (Object o : a)
        {
            JSONObject person = (JSONObject) o;

            String name = (String) person.get("name");
            System.out.println(name);

            String place = (String) person.get("place");
            System.out.println(place);

            String email = (String) person.get("email");
            System.out.println(email);

            JSONObject address = (JSONObject) person.get("address");

           System.out.println(address);
        }
    }
}
