package com.hexaware.veggies.repository;




import org.springframework.data.jpa.repository.JpaRepository;

import com.hexaware.veggies.entity.Vendor;

public interface VendorRepository extends JpaRepository<Vendor, Long>{
	public Vendor findByUserName(String userName);
	public Vendor findByEmail(String email);

}
