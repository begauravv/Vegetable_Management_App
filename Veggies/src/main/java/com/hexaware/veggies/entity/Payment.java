package com.hexaware.veggies.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "payment")
public class Payment {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "paymentId")
	private int paymentId;
	
	
	@Column(name="orderId")
	private int orderId;
	
	
	
	@Column(name="cardNumber")
	private long cardNumber;
	
	@Column(name="cvv")
	private long cvv;
	
	

	public Payment() {
		super();
		// TODO Auto-generated constructor stub
	}



	public Payment(int orderId,  long cardNumber, long cvv) {
		super();
		this.orderId = orderId;
		
		this.cardNumber = cardNumber;
		this.cvv = cvv;
	}



	public int getPaymentId() {
		return paymentId;
	}



	public void setPaymentId(int paymentId) {
		this.paymentId = paymentId;
	}



	public int getOrderId() {
		return orderId;
	}



	public void setOrderId(int orderId) {
		this.orderId = orderId;
	}



	

	public long getCardNumber() {
		return cardNumber;
	}



	public void setCardNumber(long cardNumber) {
		this.cardNumber = cardNumber;
	}



	public long getCvv() {
		return cvv;
	}



	public void setCvv(long cvv) {
		this.cvv = cvv;
	}



	@Override
	public String toString() {
		return "Payment [paymentId=" + paymentId + ", orderId=" + orderId + ", cardNumber=" + cardNumber + ", cvv=" + cvv + "]";
	}
	
	
	
	
	
	
}
