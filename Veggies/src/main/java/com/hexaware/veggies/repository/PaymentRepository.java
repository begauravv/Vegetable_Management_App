package com.hexaware.veggies.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hexaware.veggies.entity.Payment;

public interface PaymentRepository extends JpaRepository<Payment, Long>{

}
