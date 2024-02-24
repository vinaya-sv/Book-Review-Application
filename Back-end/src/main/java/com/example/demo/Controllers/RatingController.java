package com.example.demo.Controllers;

import java.util.List;

import org.springframework.aop.AopInvocationException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Model.Book;
import com.example.demo.Model.Rating;
import com.example.demo.Repositories.BookRepo;
import com.example.demo.Repositories.RatingRepo;
import com.example.demo.Repositories.UserRepository;
import com.example.demo.request.RatingRequest;

@RestController
//@CrossOrigin("*")
public class RatingController {
	@Autowired
	RatingRepo ratingRepo;
	@Autowired
	UserRepository userRepo;
	@Autowired
	BookRepo bookRepo;
	
	@PostMapping("/rating/{userEmail}/{bookId}/{ratingValue}")
	public boolean addRating(@PathVariable String userEmail, @PathVariable long bookId, @PathVariable int ratingValue ) {
//		userEmail=userEmail.substring(1,userEmail.length()-1);
//		System.out.println(userEmail);
//		System.out.println(bookId);
//		System.out.println(ratingValue);
//		
//		System.out.println(userRepo.existsByEmail(userEmail.substring(1,userEmail.length()-1)));
		if(userRepo.existsByEmail(userEmail) && ratingRepo.findByUserIdAndBookId(userRepo.findByEmail(userEmail).get().getId(),bookId).size()!=0) {
			System.out.println("Executing if case");
			Rating rating=ratingRepo.findByUserIdAndBookId(userRepo.findByEmail(userEmail).get().getId(),bookId).get(0);
			rating.setRatingValue(ratingValue);
			ratingRepo.save(rating);
		}
		else if(userRepo.existsByEmail(userEmail)){
			Rating rating=new Rating();
			rating.setRatingValue(ratingValue);
			rating.setUserId(userRepo.findByEmail(userEmail).get().getId());
			rating.setBookId(bookId);
			rating=ratingRepo.save(rating);
		}
	
	
		Book book=bookRepo.findById(bookId).get();
		book.setBookRating(getAverageRating(bookId));
		bookRepo.save(book);
		return true;
	}
	
	@GetMapping("/rating/{userEmail}/{bookId}")
	public int getRating(@PathVariable String userEmail,@PathVariable long bookId){
		try {
		return ratingRepo.findByUserIdAndBookId(userRepo.findByEmail(userEmail.substring(1,userEmail.length()-1)).get().getId(), bookId).get(0).getRatingValue();
		}
		catch(Exception e){
			return 0;
		}
	}
	
	public int getAverageRating(long bookId) {
		try {
		return ratingRepo.getAverageRating(bookId);
		}
		catch(AopInvocationException e) {
			return 0;
		}
	}
	
	
}
