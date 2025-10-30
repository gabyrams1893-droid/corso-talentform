package com.collections;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

public class ExampleIterator {

	public static void main(String[] args) {
		
		  List<String> names = new ArrayList<String>();

	        names.add("luca");
	        names.add("paolo");
	        names.add("marco");
	        names.add("anna");
	        names.remove("luca");


	        Iterator<String> it = names.iterator();


	        while (it.hasNext()) {

	            String students = it.next();

	            System.out.println(students);


	        }

	}

}
