public class MethodOverloading {
	public static void main(String[] args){
        add(3,4);
				add(3,4,5);
				add();
	}

	static void add(int ...a){
		
			int sum=0;
			for(int i:a){
				sum+=i;
			}
				System.out.println(sum);
				System.out.println("spread operator call");
		
	
	}
	// public static void add(int a,int b,int c){
	// 	System.out.println(a+b+c);
	// }

}
