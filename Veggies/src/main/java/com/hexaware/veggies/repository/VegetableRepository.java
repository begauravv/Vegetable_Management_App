package com.hexaware.veggies.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.hexaware.veggies.entity.Vegetable;


public interface VegetableRepository extends JpaRepository<Vegetable, Long> {
	public Vegetable findByVegetableName(String vegetableName);
	public Vegetable findByVegetableCategory(String vegetableCategory);
	public Vegetable findByVegetableId(Long vegetableId);
	
}