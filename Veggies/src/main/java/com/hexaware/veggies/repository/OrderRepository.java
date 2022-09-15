package com.hexaware.veggies.repository;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hexaware.veggies.entity.Customer;
import com.hexaware.veggies.entity.Order;



@Repository
public interface OrderRepository extends JpaRepository<Order, Long>{
	public List<Order> findByStatus(String status);
	public List<Order> findByOrderDate(LocalDate orderDate);
}