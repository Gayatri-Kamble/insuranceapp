package com.app.dto;

import org.springframework.stereotype.Component;

import com.app.pojos.User;

@Component
public class UserDtoEntityConverter {

	public UserDto toUserDto(User user)
	{
		UserDto dto =new UserDto();
		dto.setEmail(user.getEmail());
		dto.setPassword(user.getPassword());
		dto.setFirstName(user.getFirstName());
		dto.setLastName(user.getLastName());
		dto.setGender(user.getGender());
		dto.setRole(user.getRole());
		dto.setDob(user.getDoB());
		dto.setAge(user.getAge());
		
		return dto;
	}
	
	public User toUser(UserDto dto)
	{
		User newUser= new User();
		
		newUser.setEmail(dto.getEmail());
		newUser.setPassword(dto.getPassword());
		newUser.setFirstName(dto.getFirstName());
		newUser.setLastName(dto.getLastName());
		newUser.setRole(dto.getRole());
		newUser.setGender(dto.getGender());
		newUser.setDoB(dto.getDob());
		newUser.setAge(dto.getAge());
		return newUser;
		
	}
}
