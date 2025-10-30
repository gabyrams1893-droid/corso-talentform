package com.collections;

import java.util.HashMap;

public class ExerciceHashMap {

	public static void main(String[] args) {

		HashMap<Integer, String> images = new HashMap<>();

		images.put(1, "auto.png");
		images.put(2, "frutta.png");
		images.put(3, "articoli.png");

		System.out.println("Images map is:" + images.size());

		System.out.println(images);

		if (images.containsKey(2)) {

			// Mapping
			String img = images.get(2);

			// Printing value for the corresponding key
			System.out.println("value for key" + " \"frutta\" is:- " + img);

		}
	}

}
