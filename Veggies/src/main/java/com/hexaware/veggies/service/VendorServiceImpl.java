package com.hexaware.veggies.service;

import java.util.List;



import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hexaware.veggies.entity.Vendor;
import com.hexaware.veggies.repository.VendorRepository;


@Service
public class VendorServiceImpl implements VendorService {
	
	@Autowired
	private VendorRepository vendorRepository;

	@Override
	public Vendor addVendor(Vendor vendor) {
		// TODO Auto-generated method stub
		
		return vendorRepository.save(vendor);
	}

	@Override
	public List<Vendor> getAllVendors() {
		// TODO Auto-generated method stub
		return vendorRepository.findAll();
	}

	@Override
	public Vendor getVendorByUserName(String userName) {
		// TODO Auto-generated method stub
		return vendorRepository.findByUserName(userName);
	}

	@Override
	public Optional<Vendor> getVendorById(Long vendorId) {
		// TODO Auto-generated method stub
		return vendorRepository.findById(vendorId);
	}

	@Override
	public Vendor getVendorByEmail(String email) {
		// TODO Auto-generated method stub
		return vendorRepository.findByEmail(email);
	}

	@Override
	public void deleteVendorById(	Long vendorId) {
		// TODO Auto-generated method stub
		vendorRepository.deleteById(vendorId);
		
	}

	@Override
	public Vendor updateVendor(Vendor vendor) {
		// TODO Auto-generated method stub
	
		return vendorRepository.save(vendor);
	}

	
}