package mongodb.main;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

public class Main {
    static final String DB_NAME = ".db";

    private static void init() {
        try {
            Path dbPath = Paths.get(DB_NAME);
            if (Files.exists(dbPath)) {
                FileUtils.deleteDirectory(dbPath.toFile());
            }
            Files.createDirectory(dbPath);
        } catch (IOException e) {
            System.err.println("Unable to initialize database: " + e.getMessage());
        }
    }

    public static void main(String[] args) throws IOException {
        init();
        Collection c1 = new Collection("collection1");
        Collection c2 = new Collection("collection2");

        Document d1 = c1.createDocument();
        Document d2 = c1.createDocument();
        Document d3 = c2.createDocument();

        c2.deleteDocument(d3);
        d3 = c2.createDocument();

        d1.insert(c1);

        String[] add1 = { "as", "pq", "asdoifa" };
        Person person = new Person(5, "DB_NAME", 100.59f, add1);
        d2.insert(person);

        System.out.println(d1.toString());
        System.out.println(d2.toString());
        System.out.println(d3.getId());
    }
}
