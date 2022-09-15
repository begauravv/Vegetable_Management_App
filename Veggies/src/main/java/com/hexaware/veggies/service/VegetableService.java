package com.hexaware.veggies.service;

import java.util.List;
import java.util.Optional;

import com.hexaware.veggies.entity.Vegetable;
import com.hexaware.veggies.exception.ResourceNotFoundException;

public interface VegetableService {
	
	   Vegetable addVegetable(Vegetable vegetable);
	   List<Vegetable> getAllVegetables();
	   Vegetable getVegetableById(Long vegetableId);
	   Vegetable getVegetableByName(String vegetableName);
	   Vegetable getVegetableByCategory(String vegetableCategory);
	   void deleteVegetableById(Long vegetableId);
	   Vegetable updateVegetable(Vegetable vegetable) throws ResourceNotFoundException;
}
