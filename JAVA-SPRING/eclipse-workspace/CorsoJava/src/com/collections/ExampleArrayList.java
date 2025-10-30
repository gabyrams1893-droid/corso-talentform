package com.collections;

import java.util.*;

public class ExampleArrayList {

	public static void main(String[] args) {
		
		

		  List<String> names = new ArrayList<String>();


	      names.add("anna");
	      names.add("marco");
	      names.add("antonio");

	      names.set(1, "luca");
	      
	      Collections.reverse(names);
		
		
	      for (String people : names) {

				System.out.println(people);
			}
		
		
		
		List<Integer> numbers = new ArrayList<Integer>();

		numbers.add(5);
		numbers.add(4);
		numbers.add(3);
		numbers.add(2);
		numbers.add(1);
		numbers.remove(3);

		Collections.sort(numbers);

		for (int namess : numbers) {

			System.out.println(namess);
		}

		System.out.println("---------");

		System.out.println(numbers.size());

		System.out.println();

	}
	
	
	
	
	
	
	
	
	
	

}
