package com.hexaware.veggies.service;
import java.util.List;
import java.util.Optional;


import com.hexaware.veggies.entity.Customer;
import com.hexaware.veggies.exception.ResourceNotFoundException;


public interface CustomerService {
   Customer addCustomer(Customer customer);
   List<Customer> getAllCustomers();
   Customer getCustomerByUserName(String userName);
   Optional<Customer> getCustomerById(Long customerId);
   void deleteCustomerById(Long customerId);
   Customer updateCustomer(Customer customer) throws ResourceNotFoundException;
  
}
