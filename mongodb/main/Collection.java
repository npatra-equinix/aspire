package mongodb.main;

import java.io.File;
import java.io.IOException;

public class Collection {

    private String name;
    private int idCounter = 1;

    public Collection(String name) {
        this.name = name;
        new File(Main.DB_NAME + "/" + name).mkdirs();
    }

    public Document createDocument() throws IOException {
        Document res = new Document(this.idCounter, this);
        this.idCounter++;
        return res;
    }

    public void deleteDocument(Document document) throws IOException {
        this.idCounter--;
        if (!document.getFileHandle().delete()) {
            throw new IOException("Failed to delete document: " + document.getFileHandle().getName());
        }
    }

    // Getters and setters
    public String getName() {
        return name;
    }

    public int getIdCounter() {
        return idCounter;
    }

    public void setIdCounter(int idCounter) {
        this.idCounter = idCounter;
    }
}
