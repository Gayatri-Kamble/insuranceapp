package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "User")
public class User {

	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	@Column(name = "id")
	private int id;
	
//	@OneToMany(mappedBy = "Policy")
//	private List<Policy> policyList;
	
	@Column(name = "first_name")
	private String firstName;

	@Column(name = "last_name")
	private String lastName;
	
	@Column(name = "gender")
	private String gender;
	
	@Column
	private String address;
	@Column
	private int age;
	@Column
	private String email;

	@Column(name = "mobile_no")
	private String mobileNo;

	@Column
	private String password;
	
	//@Temporal(TemporalType.DATE)
	private String DoB;

	@Column(name = "id_proof_details")
	private String idProofDetails;

	@Enumerated(EnumType.STRING)
	private UserRole role;

	@Column(name = "id_proof_type")
	private String idProofType;


	public User() {
		// TODO Auto-generated constructor stub
	}
	


	public User(int id,String firstName, String lastName, String gender, String address,
			int age, String email, String mobileNo, String password, String DoB, String idProofDetails, UserRole role,
			String idProofType) {
		super();
		this.id = id;
		//this.policyList = policyList;
		this.firstName = firstName;
		this.lastName = lastName;
		this.gender = gender;
		this.address = address;
		this.age = age;
		this.email = email;
		this.mobileNo = mobileNo;
		this.password = password;
		this.DoB = DoB;
		this.idProofDetails = idProofDetails;
		this.role = role;
		this.idProofType = idProofType;
	}




	public int getid() {
		return id;
	}


	public void setid(int id) {
		this.id = id;
	}


//	public List<Policy> getPolicyList() {
//		return policyList;
//	}
//
//
//	public void setPolicyList(List<Policy> policyList) {
//		this.policyList = policyList;
//	}


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


	public String getGender() {
		return gender;
	}


	public void setGender(String gender) {
		this.gender = gender;
	}


	public String getAddress() {
		return address;
	}


	public void setAddress(String address) {
		this.address = address;
	}


	public int getAge() {
		return age;
	}


	public void setAge(int age) {
		this.age = age;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public String getMobileNo() {
		return mobileNo;
	}


	public void setMobileNo(String mobileNo) {
		this.mobileNo = mobileNo;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}


	public String getDoB() {
		return DoB;
	}


	public void setDoB(String doB) {
		this.DoB = doB;
	}


	public String getIdProofDetails() {
		return idProofDetails;
	}


	public void setIdProofDetails(String idProofDetails) {
		this.idProofDetails = idProofDetails;
	}


	public UserRole getRole() {
		return role;
	}


	public void setRole(UserRole role) {
		this.role = role;
	}


	public String getIdProofType() {
		return idProofType;
	}


	public void setIdProofType(String idProofType) {
		this.idProofType = idProofType;
	}


	@Override
	public String toString() {
		return "User [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", gender=" + gender
				+ ", address=" + address + ", age=" + age + ", email=" + email + ", mobileNo=" + mobileNo
				+ ", password=" + password + ", DoB=" + DoB + ", idProofDetails=" + idProofDetails + ", role=" + role
				+ ", idProofType=" + idProofType + "]";
	}



	public User(int id, String firstName, String lastName, int age, String email, String mobileNo) {
		super();
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
		this.email = email;
		this.mobileNo = mobileNo;
	}



	
	

}