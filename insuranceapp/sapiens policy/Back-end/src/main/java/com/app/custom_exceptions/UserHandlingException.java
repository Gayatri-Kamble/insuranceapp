package com.app.custom_exceptions;

public class UserHandlingException extends RuntimeException{
    public UserHandlingException(String msg) {
	 super(msg);
	}
}
