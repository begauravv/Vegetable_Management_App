package com.hexaware.veggies.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hexaware.veggies.entity.Payment;
import com.hexaware.veggies.repository.PaymentRepository;

@Service
public class PaymentServiceImpl implements PaymentService{
	
	@Autowired
	PaymentRepository paymentRepository;

	@Override
	public List<Payment> getAllPayments() {
		// TODO Auto-generated method stub
		return paymentRepository.findAll();
	}

	@Override
	public Payment addPayment(Payment payment) {
		// TODO Auto-generated method stub
		return paymentRepository.save(payment);
	}

}
