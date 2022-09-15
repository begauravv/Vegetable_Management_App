package com.hexaware.veggies.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hexaware.veggies.entity.Vendor;
import com.hexaware.veggies.exception.ResourceNotFoundException;
import com.hexaware.veggies.service.VendorService;

@RestController
@RequestMapping("/vendor")
public class VendorController {
	@Autowired
	private VendorService vendorService;
    
	//adds new Manager
	@PostMapping("/addvendor")
	public ResponseEntity<String> addManager(@Valid @RequestBody Vendor vendor){
		Vendor rvendor = vendorService.addVendor(vendor);
		if(rvendor!=null)
			return new ResponseEntity<>("Successfull added vendor", HttpStatus.OK);
		else
			return new ResponseEntity<>("Successfull not added vendor", HttpStatus.NOT_FOUND);
	}
	//gets the list of all the Managers
	@GetMapping("/getallvendors")
	public List<Vendor> getAllManager(){
		return vendorService.getAllVendors();
		
	}
	//updates the details of  Manager
	@PutMapping("/updatevendor/{vid}")
	public Vendor updateManager(@Valid @RequestBody Vendor newVendor,
			                     @PathVariable("vid") Long vendorId) 
			                     throws ResourceNotFoundException {
		Vendor vendor =  vendorService.getVendorById(vendorId)
				.orElseThrow(() -> new ResourceNotFoundException("Vendor not exists with id" +vendorId));

		vendor.setFirstName(newVendor.getFirstName());
		vendor.setLastName(newVendor.getLastName());
		vendor.setEmail(newVendor.getEmail());
		vendor.setUserName(newVendor.getUserName());
		vendor.setPassword(newVendor.getPassword());
		
		
		
		return vendorService.updateVendor(vendor);
		
	}
	
	//finds the Manager of given id
	@GetMapping("/findvendorbyid/{vid}")
	public Vendor getManagerById(@PathVariable("vid") Long vendorId){
		return vendorService.getVendorById(vendorId).get();
	}
	
	//Deletes the Manager
	@DeleteMapping("/deletevendor/{vid}")
	public void deleteManagerById(@PathVariable("vid") Long vendorId){
		 vendorService.deleteVendorById(vendorId);
	}
	
	//finds the Manager of given username
	@GetMapping("/findvendor/{vusername}")
	public Vendor getVendorByName(@PathVariable("vusernamename") String userName){
		return vendorService.getVendorByUserName(userName);
	}
	
	
	
	
}