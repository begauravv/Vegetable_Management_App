package com.hexaware.veggies.controller;

import java.util.List;



import javax.validation.Valid;

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

import com.hexaware.veggies.entity.Customer;
import com.hexaware.veggies.exception.ResourceNotFoundException;
import com.hexaware.veggies.service.CustomerService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

@CrossOrigin("*")
@RestController
@RequestMapping("/customer")
@Api(value = "Vegetable Management System",description = "Operations of Customer class")
public class CustomerController {
	@Autowired
	private CustomerService customerService;
	
    
	//adds new Customer
	
	@PostMapping("/addcustomer")
	@ApiOperation(value = "Add Customer")
	public ResponseEntity<String> addCustomer(
			@ApiParam (value = "Customer object is stored in database",required = true) 
			@RequestBody Customer customer){
		Customer rcustomer = customerService.addCustomer(customer);
		if(rcustomer!=null)
			return new ResponseEntity<>("Successfull added customer", HttpStatus.OK);
		else
			return new ResponseEntity<>("Successfull not added customer", HttpStatus.NOT_FOUND);
	}
	
	//returns the list of all customer
	
	@GetMapping("/getallcustomers")
	@ApiOperation(value = "view a list of customers",response = List.class)
	@ApiResponses(value = {
			@ApiResponse(code = 200,message = "Successfully retrieved list of customers"),
			@ApiResponse(code = 401,message = "you are not authorized to view this resource"),
			@ApiResponse(code = 403,message = "accessing of this resource forbidden"),
			@ApiResponse(code = 404,message = "Resource not found"),
	})
	public List<Customer> getAllCustomer(){
		return customerService.getAllCustomers();
		
	}
	
	//updates the existing customer
	@PutMapping("/updatecustomer/{cid}")
	@ApiOperation(value = "update customer")
	public Customer updateCustomer(@ApiParam (value = "Customer object to update",required = true)
			                       @Valid @RequestBody Customer newCustomer,
			                       @ApiParam (value="returns the customer with id to update",required = true)

			                       @PathVariable("cid") Long customerId) 
			                       throws ResourceNotFoundException {
		Customer customer =  customerService.getCustomerById(customerId)
				.orElseThrow(() -> new ResourceNotFoundException("Customer not exists with id" +customerId));

		customer.setFirstName(newCustomer.getFirstName());
		customer.setLastName(newCustomer.getLastName());
		customer.setEmail(newCustomer.getEmail());
		customer.setAddress(newCustomer.getAddress());
		customer.setUserName(newCustomer.getUserName());
		customer.setPassword(newCustomer.getPassword());
		customer.setBalance(newCustomer.getBalance());
		
		
		return customerService.updateCustomer(customer);
		
	}
	
	//searches the customer by given id
	
	@GetMapping("/findcustomerbyid/{cid}")
	@ApiOperation(value = "Get customer by id")
	public Customer getCustomerById(
			@ApiParam (value="returns the customer with id",required = true)
			@PathVariable("cid") Long customerId){
		return customerService.getCustomerById(customerId).get();
	}
	//deletes the customer
	
	@DeleteMapping("/deletecustomer/{cid}")
	@ApiOperation(value = "deletes a customer")
	public void deleteCustomerById(@PathVariable("cid") Long customerId){
		 customerService.deleteCustomerById(customerId);
	}
	//gets the customer of given username
	
	@GetMapping("/findcustomer/{cusername}")
	@ApiOperation(value = "Get customer by username")
	public Customer getCustomerByName(
			@ApiParam (value="returns the customer with user name",required = true)
            @PathVariable("cusername") String userName){
		return customerService.getCustomerByUserName(userName);
	}
	
	
	
}
