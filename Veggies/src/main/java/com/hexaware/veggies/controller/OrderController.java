package com.hexaware.veggies.controller;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;


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

import com.hexaware.veggies.entity.Order;
import com.hexaware.veggies.exception.ResourceNotFoundException;
import com.hexaware.veggies.service.OrderService;
@CrossOrigin("*")
@RestController
@RequestMapping("/order")
public class OrderController {
	
	@Autowired
	private OrderService orderService;
	
	//adds new Order
	@PostMapping("/addorder")
	public ResponseEntity<String> addOrder(@RequestBody Order order){
		Order rorder = orderService.placeOrder(order);
		if(rorder!=null)
			return new ResponseEntity<>("Successfull added order", HttpStatus.OK);
		else
			return new ResponseEntity<>("Successfull not added order", HttpStatus.NOT_FOUND);
	}
	
	//gets the list of all Orders
	@GetMapping("/getallorders")
	public List<Order> getAllOrder(){
		return orderService.getAllOrders();
		
	}
	
	//updates the Order details
	@PutMapping("/updateorder/{oid}")
	public Order updateOrder(@RequestBody Order newOrder,
			                 @PathVariable("oid") Long orderId) 
			                 throws ResourceNotFoundException {
		Order order =  orderService.getOrderById(orderId)
				.orElseThrow(() -> new ResourceNotFoundException("Order not exists with id" +orderId));

		
        order.setCustomerId(newOrder.getCustomerId());
        order.setStatus(newOrder.getStatus());
        
		
		
		
		return orderService.updateOrder(order);
		
	}
	
	//gets the Order by given id
	@GetMapping("/findorderbyid/{oid}")
	public Order getOrderById(@PathVariable("oid") Long orderId){
		return orderService.getOrderById(orderId).get();
	}
	
	//deletes the Order
	@DeleteMapping("/deleteorder/{oid}")
	public void deleteOrderById(@PathVariable("oid") Long orderId){
		 orderService.deleteOrderById(orderId);
	}
	
	@GetMapping("/findordersbystatus/{status}")
	public List<Order> getOrdersByStatus(@PathVariable("status") String status){
		return orderService.getOrdersByStatus(status);
	}
	
	@GetMapping("/findordersbydate/{date}")
	public List<Order> getOrdersByDate(@PathVariable("date") String orderDate){
		LocalDate orderLDate = LocalDate.parse(orderDate);
		return orderService.getOrderByDate(orderLDate);
	}

}
