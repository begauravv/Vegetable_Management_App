package com.hexaware.veggies.service;

import java.time.LocalDate;


import java.util.List;
import java.util.Optional;

import com.hexaware.veggies.entity.Order;
import com.hexaware.veggies.exception.ResourceNotFoundException;

public interface OrderService {
	
	   Order placeOrder(Order order);
	   List<Order> getAllOrders();
	   Optional<Order> getOrderById(Long orderId);
	   List<Order> getOrdersByStatus(String status);
	   List<Order> getOrderByDate(LocalDate orderDate);
	   void deleteOrderById(Long orderId);
	   Order updateOrder(Order order) throws ResourceNotFoundException;

}
