import java.util.HashSet;
import java.util.HashMap;

public class Employee{
	int id;
	String name;
	long costCenter;
	Employee manager;
  
	void setId(int id){
		this.id = id;
	}
	void setName(String name){
		this.name = name;
	}
	void setCostCenter(long costCenter){
		this.costCenter = costCenter;
	}
	void setManager(Employee manager){
		this.manager = manager;
	}

	public static void main(String[] args){
		Employee obj = new Employee();
		Employee managerobj = new Employee();
		obj.setId(1);
		obj.setName("Rabin");
		obj.setCostCenter(80000);
		obj.setManager(managerobj); 
    
		HashSet<Integer> hs = new HashSet<>();
		hs.add(obj.id);
		HashMap<String,Employee> hm = new HashMap<>();
		hm.put(obj.name,obj);

	}
}