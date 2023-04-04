package com.app.controller;

import java.util.List;

import javax.annotation.PostConstruct;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.Response;
import com.app.dto.UserDto;
import com.app.pojos.User;
import com.app.pojos.UserRole;
import com.app.service.UserServiceImpl;

@CrossOrigin(origins = "*")
@RestController
public class AdminControllerImpl {

	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Autowired
	private UserServiceImpl userService;
	

	@GetMapping("/userList")
	public ResponseEntity<?> findAll() {
			List<User> result = userService.findAllUsers();
			return Response.success(result);
		
	}


	
	@DeleteMapping("/user/{id}")
	public ResponseEntity<?> deleteById(@PathVariable("id") int id) {
			int count = userService.deleteUserById(id);
			if (count == 0)
				return Response.status(HttpStatus.NOT_FOUND); // http status = 404
			return Response.success("Deleted Count: " + count); // http status = 200, body = "Record Deleted"
		
	}
	
	
	@PostMapping("/addClient")
	public ResponseEntity<?> addClient(@RequestBody @Valid User newUser) {
			UserDto result = userService.saveUser(newUser);
			if (result != null) {
				//Response.success("Client added Successfully");
				return Response.success(result);
			}
			return Response.error("Unable to add. Client already exists!	");
		}
	
	@PostMapping("/signup")
	public ResponseEntity<?> signUp(@RequestBody @Valid User newUser) {
			UserDto result = userService.saveUser(newUser);
			if (result != null) {
				//Response.success("Account added Successfully");
				return Response.success(result);
			}
			return Response.error("Signup failed!!!!User Already Exists	");
		}
	
	
	
	@PostConstruct
	public void addAdminAtStartup(){
		User user =new User();
		user.setid(1);
		user.setAddress("pune,maharashtra");
		user.setAge(1);
		user.setEmail("sap@gmail.com");
		user.setFirstName("sapiens");
		user.setGender("Male");
		user.setIdProofDetails("3870");
		user.setIdProofType("aadhaar");
		user.setLastName("insurance");
		user.setMobileNo("8745896547");
		user.setPassword(passwordEncoder.encode("sap@123"));
		//user.setDoB("1998-05-03");
		user.setRole(UserRole.ADMIN);
		userService.addAdmin(user);
		
	}
}
