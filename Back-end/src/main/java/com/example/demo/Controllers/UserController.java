package com.example.demo.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Repositories.UserRepository;
import com.example.demo.Services.UserService;
import com.example.demo.request.UserRequest;

import lombok.RequiredArgsConstructor;


@RestController
@RequiredArgsConstructor
@CrossOrigin("*")
public class UserController {
	@Autowired
	UserRepository userRepo;
	private final UserService userService;
	
	@PostMapping("/addUserFeedback")
	public ResponseEntity<String> addUserFeedback(@RequestBody UserRequest userRequest){
		userService.addUserFeedback(userRequest);
		System.out.println("Hello all");
		return ResponseEntity.status(HttpStatus.OK).body("Feedback added!");
	}
	
	@GetMapping("/getname/{userEmail}")
	public String getName(@PathVariable String userEmail) {
		System.out.println(userEmail);
		return userRepo.findByEmail(userEmail).get().getName();
	}
}
