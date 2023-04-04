package com.app.dto;

import com.app.pojos.UserRole;

public class UserDto {

	private String email;
	private String password;
	private String firstName;
	private String lastName;
	private String dob;
	private UserRole role;
	private String gender;
	private int age;
	
	
	public UserDto() {
		super();
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


	public String getDob() {
		return dob;
	}


	public void setDob(String dob) {
		this.dob = dob;
	}


	public UserRole getRole() {
		return role;
	}


	public void setRole(UserRole role) {
		this.role = role;
	}


	public String getGender() {
		return gender;
	}


	public void setGender(String gender) {
		this.gender = gender;
	}


	public int getAge() {
		return age;
	}


	public void setAge(int age) {
		this.age = age;
	}


	public UserDto(String email, String password, String firstName, String lastName, String dob, UserRole role,
			String gender, int age) {
		super();
		this.email = email;
		this.password = password;
		this.firstName = firstName;
		this.lastName = lastName;
		this.dob = dob;
		this.role = role;
		this.gender = gender;
		this.age = age;
	}


	@Override
	public String toString() {
		return "UserDto [email=" + email + ", password=" + password + ", firstName=" + firstName + ", lastName="
				+ lastName + ", dob=" + dob + ", role=" + role + ", gender=" + gender + ", age=" + age + "]";
	}
	
}
