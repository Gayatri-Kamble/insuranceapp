package com.app.dto;

public class ChangePasswordCredential {
	private int Id;
	private String email;
	private String idProofDetails;
	private String newPassword;
	public ChangePasswordCredential() {
		super();
	}
	public ChangePasswordCredential(int id, String email, String idProofDetails, String newPassword) {
		super();
		Id = id;
		this.email = email;
		this.idProofDetails = idProofDetails;
		this.newPassword = newPassword;
	}
	public int getId() {
		return Id;
	}
	public void setId(int id) {
		Id = id;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getIdProofDetails() {
		return idProofDetails;
	}
	public void setIdProofDetails(String idProofDetails) {
		this.idProofDetails = idProofDetails;
	}
	public String getNewPassword() {
		return newPassword;
	}
	public void setNewPassword(String newPassword) {
		this.newPassword = newPassword;
	}
	@Override
	public String toString() {
		return "ChangePasswordCredential [Id=" + Id + ", email=" + email + ", idProofDetails=" + idProofDetails
				+ ", newPassword=" + newPassword + "]";
	}
	
	

}
