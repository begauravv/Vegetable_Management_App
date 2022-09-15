package com.hexaware.veggies.entity;



import java.time.LocalDate;

import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.ZoneId;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "orders")
public class Order{
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="order_id")
	private Long orderId;
	
	
	@Column(name = "customerId")
	private Long customerId;
	
	@Column(name = "vegetableId")
	private Long vegetableId;
	
	@Column(name = "quantity")
	private int quantity;
	
	@Column(name = "amount")
	private Long amount;
	
	@Column(name = "status", nullable = false)
	private String status;
	
	@Column(name = "order_date")
	private LocalDate orderDate = LocalDate.now();
	
	@Column(name = "order_time")
	private LocalTime orderTime = LocalTime.now();
	
	
	
	public Order() {
		super();
	}



	public Order(Long customerId, Long vegetableId, int quantity, Long amount, String status, LocalDate orderDate,
			LocalTime orderTime) {
		super();
		this.customerId = customerId;
		this.vegetableId = vegetableId;
		this.quantity = quantity;
		this.amount = amount;
		this.status = status;
		this.orderDate = orderDate;
		this.orderTime = orderTime;
	}



	public Long getOrderId() {
		return orderId;
	}



	public void setOrderId(Long orderId) {
		this.orderId = orderId;
	}



	public Long getCustomerId() {
		return customerId;
	}



	public void setCustomerId(Long customerId) {
		this.customerId = customerId;
	}



	public Long getVegetableId() {
		return vegetableId;
	}



	public void setVegetableId(Long vegetableId) {
		this.vegetableId = vegetableId;
	}



	public int getQuantity() {
		return quantity;
	}



	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}



	public Long getAmount() {
		return amount;
	}



	public void setAmount(Long amount) {
		this.amount = amount;
	}



	public String getStatus() {
		return status;
	}



	public void setStatus(String status) {
		this.status = status;
	}



	public LocalDate getOrderDate() {
		return orderDate;
	}



	public void setOrderDate(LocalDate orderDate) {
		this.orderDate = orderDate;
	}



	public LocalTime getOrderTime() {
		return orderTime;
	}



	public void setOrderTime(LocalTime orderTime) {
		this.orderTime = orderTime;
	}



	@Override
	public String toString() {
		return "Order [orderId=" + orderId + ", customerId=" + customerId + ", vegetableId=" + vegetableId
				+ ", quantity=" + quantity + ", amount=" + amount + ", status=" + status + ", orderDate=" + orderDate
				+ ", orderTime=" + orderTime + "]";
	}



	
	}