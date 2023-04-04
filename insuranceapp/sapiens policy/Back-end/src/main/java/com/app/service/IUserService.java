package com.app.service;

import java.util.List;
import org.springframework.web.bind.annotation.RequestBody;
import com.app.dto.Credential;
import com.app.dto.UserDto;
import com.app.pojos.User;

public interface IUserService {
	User findByEmailAndPassword(Credential cred);
	UserDto saveUser(User newUser);
	UserDto updateProfile(User user);
	User addClient(@RequestBody UserDto user);
	List<User> findAllUsers();
	int deleteUserById(int userId);
}
