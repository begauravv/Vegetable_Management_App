package com.hexaware.veggies.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hexaware.veggies.entity.Customer;



public interface CustomerRepository extends JpaRepository<Customer, Long> {
	public Customer findByUserName(String userName);
	
}
