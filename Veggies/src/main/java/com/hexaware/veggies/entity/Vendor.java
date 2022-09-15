package com.hexaware.veggies.entity;


import javax.persistence.Column;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "vender")
public class Vendor {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "vendor_id")
	private Long venderId;
	
	@Column(name = "first_name",nullable = false)
	private String firstName;
	
	@Column(name = "last_name",nullable = false)
	private String lastName;
	
	@Column(name = "email",nullable = false)
	private String email;
	
	@Column(name = "username",nullable = false)
	private String userName;
	
	@Column(name = "password",nullable = false)
	private String password;
	

	public Vendor() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Vendor(String firstName, String lastName, String email, String userName, String password
			) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.userName = userName;
		this.password = password;
		
	}

	public Long getManagerId() {
		return venderId;
	}

	public void setManagerId(Long venderId) {
		this.venderId = venderId;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	

	public Vendor(Long venderId, String firstName, String lastName, String email, String userName, String password
			) {
		super();
		this.venderId = venderId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.userName = userName;
		this.password = password;
		
	}

	

}
