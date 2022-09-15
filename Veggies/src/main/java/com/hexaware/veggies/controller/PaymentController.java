package com.hexaware.veggies.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hexaware.veggies.entity.Payment;
import com.hexaware.veggies.service.PaymentService;
@CrossOrigin("*")
@RestController
@RequestMapping("/payment")
public class PaymentController {
	
	@Autowired
	PaymentService paymentService;
	
	@PostMapping("/addpayment")
	public ResponseEntity<String> addPayment(@RequestBody Payment payment){
		Payment rpayment = paymentService.addPayment(payment);
		if(rpayment!=null)
			return new ResponseEntity<>("Payment Successfull", HttpStatus.OK);
		else
			return new ResponseEntity<>("Payment Failed", HttpStatus.NOT_FOUND);
	}

	//gets the list of all Vegetables
	@GetMapping("/getallpayments")
	public List<Payment> getAllPayment(){
		return paymentService.getAllPayments();
		
	}	
	
	
	
}
