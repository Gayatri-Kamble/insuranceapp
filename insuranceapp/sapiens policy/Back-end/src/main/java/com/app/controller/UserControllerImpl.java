package com.app.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.ChangePasswordCredential;
import com.app.dto.Credential;
import com.app.dto.Response;
import com.app.dto.UserDto;
import com.app.pojos.User;
import com.app.service.UserServiceImpl;

@CrossOrigin(origins = "*")
@RestController
public class UserControllerImpl {

	@Autowired
	private UserServiceImpl userService;
	
	@PostMapping("/user/signin")
	public ResponseEntity<?> signIn(@RequestBody Credential cred) {
				User user = userService.findByEmailAndPassword(cred);
				if (user != null)
					return Response.success(user);
				return Response.error("user not found");
	}

	@PostMapping("/user/signup")
	public ResponseEntity<?> signUp(@RequestBody @Valid User newUser) {
			UserDto result = userService.saveUser(newUser);
			if (result != null) {
				//Response.success("Account added Successfully");
				return Response.success(result);
			}
			return Response.error("Signup failed!!!!User Already Exists	");
		}
	

	

	@PostMapping("/user/forgetPassword")
    public ResponseEntity<?> changePassword(@RequestBody ChangePasswordCredential cred)
    {
        boolean result=userService.changePassword(cred);
        if(result==true)
            return Response.success("Password Changed!");
        return Response.error("Update Failed!!!Please Try Again!");

    }
	

	
	@GetMapping("/user/userProfile/{id}")
	public ResponseEntity<?> userprofile(@PathVariable("id") int id) {
		
		User user=userService.findById(id);
		return Response.success(user);
		
	}


	}

