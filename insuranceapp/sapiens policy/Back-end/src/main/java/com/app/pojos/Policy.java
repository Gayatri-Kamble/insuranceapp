package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

public class Policy {

	
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	@Column(name = "policyId")
	private int policyId;
	
	@Column(name = "firstName")
	private String firstName;
	@Column(name = "lastName")
	private String lastName;
	@Column(name = "emailId")
	private String emailId;
	

	@Column(name = "mobileNo")
	private int mobileNo;
	@Column(name = "gender")
	private String gender;
	@Column(name = "age")
	private int age;
	@Column(name = "tobaccoIntake(Y/N)")
	private boolean tobaccoIntake;
	@Column(name = "annualIncome")
	private long annualIncome;
	@Column(name = "coverageAmount")
	private long coverageAmount;
	@Column(name = "ageOfInsurance")
	private int ageOfInsurance;
	@Column(name = "typeOfPolicy")
	private String typeOfPolicy;
	
	public Policy() {
		// TODO Auto-generated constructor stub
	}
	
	public Policy(int policyId, String firstName, String lastName, String emailId, int mobileNo, String gender, int age,
			boolean tobaccoIntake, long annualIncome, long coverageAmount, int ageOfInsurance, String typeOfPolicy) {
		super();
		this.policyId = policyId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.emailId = emailId;
		this.mobileNo = mobileNo;
		this.gender = gender;
		this.age = age;
		this.tobaccoIntake = tobaccoIntake;
		this.annualIncome = annualIncome;
		this.coverageAmount = coverageAmount;
		this.ageOfInsurance = ageOfInsurance;
		this.typeOfPolicy = typeOfPolicy;
	}

	public int getPolicyId() {
		return policyId;
	}

	public void setPolicyId(int policyId) {
		this.policyId = policyId;
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

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public int getMobileNo() {
		return mobileNo;
	}

	public void setMobileNo(int mobileNo) {
		this.mobileNo = mobileNo;
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

	public boolean isTobaccoIntake() {
		return tobaccoIntake;
	}

	public void setTobaccoIntake(boolean tobaccoIntake) {
		this.tobaccoIntake = tobaccoIntake;
	}

	public long getAnnualIncome() {
		return annualIncome;
	}

	public void setAnnualIncome(long annualIncome) {
		this.annualIncome = annualIncome;
	}

	public long getCoverageAmount() {
		return coverageAmount;
	}

	public void setCoverageAmount(long coverageAmount) {
		this.coverageAmount = coverageAmount;
	}

	public int getAgeOfInsurance() {
		return ageOfInsurance;
	}

	public void setAgeOfInsurance(int ageOfInsurance) {
		this.ageOfInsurance = ageOfInsurance;
	}

	public String getTypeOfPolicy() {
		return typeOfPolicy;
	}

	public void setTypeOfPolicy(String typeOfPolicy) {
		this.typeOfPolicy = typeOfPolicy;
	}

	@Override
	public String toString() {
		return "Policy [policyId=" + policyId + ", firstName=" + firstName + ", lastName=" + lastName + ", emailId="
				+ emailId + ", mobileNo=" + mobileNo + ", gender=" + gender + ", age=" + age + ", tobaccoIntake="
				+ tobaccoIntake + ", annualIncome=" + annualIncome + ", coverageAmount=" + coverageAmount
				+ ", ageOfInsurance=" + ageOfInsurance + ", typeOfPolicy=" + typeOfPolicy + "]";
	}
	
	
	
	
	
}
