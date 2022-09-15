package com.hexaware.veggies.service;

import java.util.List;
import java.util.Optional;

import com.hexaware.veggies.entity.Vendor;
import com.hexaware.veggies.exception.ResourceNotFoundException;

public interface VendorService {
	Vendor addVendor(Vendor vendor);
	   List<Vendor> getAllVendors();
	   Vendor getVendorByUserName(String userName);
	   Optional<Vendor> getVendorById(Long vendorId);
	   
	   Vendor getVendorByEmail(String email);
	   void deleteVendorById(Long vendorId);
	   Vendor updateVendor(Vendor vendor) throws ResourceNotFoundException;
	   

}
