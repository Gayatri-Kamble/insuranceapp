package com.app.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.app.dao.UserRepository;
import com.app.dto.ChangePasswordCredential;
import com.app.dto.Credential;
import com.app.dto.UserDto;
import com.app.dto.UserDtoEntityConverter;
import com.app.pojos.User;
import com.app.pojos.UserRole;

@Transactional
@Service
public class UserServiceImpl implements IUserService{
	
	@Autowired
	private UserRepository userRepository;
	@Autowired
	UserDtoEntityConverter converter;
	@Autowired
	private PasswordEncoder passwordEncoder;

	public UserDto saveUser(User newUser) {
		boolean user=userRepository.existsByEmail(newUser.getEmail());
		if(user) {
		    System.out.println("Account already exists");
		    return null;
		}
		else {
			String rawPassword = newUser.getPassword();
			String encPassword = passwordEncoder.encode(rawPassword);
	
			newUser.setPassword(encPassword);
			newUser.setRole(UserRole.USER);
			userRepository.save(newUser);
			UserDto newUserDto = converter.toUserDto(newUser);
			return newUserDto;
		}
		
	}
	
	public User addClient(@RequestBody UserDto usr ) 
	{
		
		//UserDto newUserDto = converter.toUserDto(newUser);
		User newUsr=converter.toUser(usr);
		return userRepository.save(newUsr);
	}

	public User findByEmailAndPassword(Credential cred) {

		User dbUser = userRepository.findByEmail(cred.getEmail());
		String rawPassword = cred.getPassword();
		if (dbUser != null && passwordEncoder.matches(rawPassword, dbUser.getPassword())) {
			//UserDto userDto = converter.toUserDto(dbUser);
			//userDto.setPassword("**************");
			return dbUser;
		}
		return null;
		
	}

	public boolean changePassword(ChangePasswordCredential cred) {
		User dbUser = userRepository.findByEmail(cred.getEmail());
		String rawIdProofDetails = cred.getIdProofDetails();
		if (dbUser != null && rawIdProofDetails.equals(dbUser.getIdProofDetails()))
		{
			String rawNewPassword = cred.getNewPassword();
			String encNewPassword = passwordEncoder.encode(rawNewPassword);
			dbUser.setPassword(encNewPassword);
			User savedUser = userRepository.save(dbUser);
			if (savedUser != null)
				return true;
		}
			return false;
	}




	public UserDto updateProfile(User user) {
		User updateUser = userRepository.findById(user.getid());
		updateUser.setAddress(user.getAddress());
		updateUser.setAge(user.getAge());
		updateUser.setEmail(user.getEmail());
		updateUser.setFirstName(user.getFirstName());
		updateUser.setLastName(user.getLastName());
		updateUser.setMobileNo(user.getMobileNo());
		updateUser.setIdProofDetails(user.getIdProofDetails());
		updateUser.setIdProofType(user.getIdProofType());

		userRepository.save(updateUser);
		UserDto updatedUser = converter.toUserDto(updateUser);
		return updatedUser;

	}

	public List<User> findAllUsers() {
		return userRepository.AllUser();
	}

	public int deleteUserById(int userId) {
		if (userRepository.existsById(userId)) {
			userRepository.deleteById(userId);
			return 1;
		}
		else
			return 0;
	}
	public User findById(int userId) {
		User u  = userRepository.findById(userId);
			return u;
	}
	
	public String saveAdmin() {
//		boolean user=userRepository.existsByEmail(newAdmin.getEmail());
//		if(user) {
//		    throw new UserHandlingException("Account Already Exist");
//		}
//		else {
//			String rawPassword = newAdmin.getPassword();
//			String encPassword = passwordEncoder.encode(rawPassword);
//	
//			newAdmin.setPassword(encPassword);
//			newAdmin.setRole(UserRole.ADMIN);
			userRepository.insertAdmin();
			return "success";
		}
	
	public User addAdmin(User admin) {
		
		return userRepository.save(admin);
				
	}
	}

