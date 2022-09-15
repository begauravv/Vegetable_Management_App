package com.hexaware.veggies.service;

import java.util.List;

import com.hexaware.veggies.entity.Payment;


public interface PaymentService {
	
	
	
	List<Payment> getAllPayments();
	Payment addPayment(Payment payment);

}
