package com.app.dto;

public class Credential {

	private int userId;
	private String email;
	private String password;
	
	
	
	public Credential() {
		super();
	}
	public Credential(String email, String password,int userId) {
		super();
		this.email = email;
		this.password = password;
		this.userId=userId;
		
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;

	}
	@Override
	public String toString() {
		return "Credential [userId=" + userId + ", email=" + email + ", password=" + password + "]";
	}
	
	
	
}
