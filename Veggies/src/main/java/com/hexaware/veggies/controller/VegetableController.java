package com.hexaware.veggies.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hexaware.veggies.entity.Vegetable;
import com.hexaware.veggies.exception.ResourceNotFoundException;
import com.hexaware.veggies.service.VegetableService;

@CrossOrigin("*")
@RestController
@RequestMapping("/vegetable")
public class VegetableController {
	
	@Autowired
	private VegetableService vegetableService;
	
	//adds new Vegetable
	@PostMapping("/addvegetable")
	public Vegetable getVegetable(@RequestBody Vegetable vegetable) {
		return vegetableService.addVegetable(vegetable);
		
	}
	
	//gets the list of all Vegetables
	@GetMapping("/getallvegetables")
	public List<Vegetable> getAllVegetable(){
		return vegetableService.getAllVegetables();
		
	}
	//updates the Vegetable details
	@PutMapping("/updatevegetable/{mid}")
	public Vegetable updateVegetable(@RequestBody Vegetable newVegetable,@PathVariable("mid") Long vegetableId) throws ResourceNotFoundException {
		Vegetable vegetable =  vegetableService.getVegetableById(vegetableId);

		vegetable.setVegetableName(newVegetable.getVegetableName());
		vegetable.setVegetablePrice(newVegetable.getVegetablePrice());
		vegetable.setVegetableDescription(newVegetable.getVegetableDescription());
        vegetable.setUrl(newVegetable.getUrl());
		return vegetableService.updateVegetable(vegetable);
		
	}
	
	//gets the vegetable of given id
	@GetMapping("/findvegetablebyid/{vid}")
	public Vegetable getVegetableById(@PathVariable("vid") Long vegetableId){
		return vegetableService.getVegetableById(vegetableId);
	}
	
	//deletes Vegetable
	@DeleteMapping("/deletevegetable/{vid}")
	public void deleteVegetableById(@PathVariable("vid") Long vegetableId){
		 vegetableService.deleteVegetableById(vegetableId);
	}
	
	//finds Vegetable by given Name
	@GetMapping("/findvegetablebyname/{vname}")
	public Vegetable getVegetableByName(@PathVariable("vname") String vegetableName){
		return vegetableService.getVegetableByName(vegetableName);
	}
	
	@GetMapping("/findvegetablebycategory/{vcategory}")
	public Vegetable getVegetableByCategory(@PathVariable("vcategory") String vegetableCategory){
		return vegetableService.getVegetableByCategory(vegetableCategory);
	}
	
	
}
