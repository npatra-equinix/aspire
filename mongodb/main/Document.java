package mongodb.main;

import com.google.gson.Gson;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.nio.file.Files;

public class Document {
    private int id;
    private File fileHandle;
    private Collection parentCollection;

    public Document(int id, Collection collection) throws IOException {
        this.id = id;
        this.parentCollection = collection;
        this.fileHandle = new File(Main.DB_NAME + "/" + collection.getName() + "/" + id + ".json");
        if (!fileHandle.exists()) {
            fileHandle.createNewFile();
        }
    }

    public void insert(Object object) throws IOException {
        String serializedObject = new Gson().toJson(object);
        try (FileWriter fp = new FileWriter(fileHandle)) {
            fp.write(serializedObject);
        } catch (IOException err) {
            throw new IOException("Error writing to document: " + this.fileHandle, err);
        }
    }

    @Override
    public String toString() {
        try {
            return Files.readString(this.fileHandle.toPath());
        } catch (IOException err) {
            throw new RuntimeException("Error reading from document: " + this.fileHandle, err);
        }
    }

    public int getId() {
        return id;
    }

    public File getFileHandle() {
        return fileHandle;
    }

    public Collection getParentCollection() {
        return parentCollection;
    }
}
