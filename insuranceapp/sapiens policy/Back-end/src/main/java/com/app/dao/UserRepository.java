package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.pojos.User;



public interface UserRepository extends JpaRepository<User, Integer>{

	User findByEmailAndPassword(String email,String password);
	
	User findByEmail(String email);
	User findById(int id);
	
	@Query(value ="select * from user where not role ='ADMIN'", nativeQuery = true)
	List<User> AllUser();

	boolean existsByEmail(String email);

	boolean existsByEmailAndPassword(String email, String oldPassword);

	

	@Query(value = "insert into user VALUES (1,'pune',50,'sapiens@gmail.com','sapiens',3870,'aadhaar','insurance','8745896547','sap@123','ADMIN')", nativeQuery = true)
	User insertAdmin();

	

}