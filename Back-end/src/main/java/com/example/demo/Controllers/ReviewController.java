package com.example.demo.Controllers;

import java.sql.Date;
import java.sql.Time;
import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Model.Review;
import com.example.demo.Repositories.BookRepo;
import com.example.demo.Repositories.ReviewRepo;
import com.example.demo.Repositories.UserRepository;
import com.example.demo.request.ReviewRequest;

@RestController
@CrossOrigin("*")
public class ReviewController {
	@Autowired
	ReviewRepo reviewRepo;
	@Autowired
	BookRepo bookRepo;
	@Autowired
	UserRepository userRepo;
	@GetMapping("/review")
	public List<Review> getReviewByUserEmailAndBookName(){
		return reviewRepo.findAll();
	}
	
	@PostMapping("/review")
	public void addReview(@RequestBody ReviewRequest reviewReq) {
		Review  review=new Review();
		review.setReviewComment(reviewReq.getReviewComment());
//		review.setReview_date_time();
		review.setUserName(userRepo.findByEmail(reviewReq.getEmailId().substring(1,reviewReq.getEmailId().length()-1)).get().getName());
		review.setBookId(reviewReq.getBookId());
		review.setReviewDate(new Date(System.currentTimeMillis()));
		review.setReviewTime(new Time(System.currentTimeMillis()));
		reviewRepo.save(review);
	}
	@GetMapping("/review/{bookId}")
	public List<Review> getReviewByBookId(@PathVariable long bookId){
		return reviewRepo.findByBookId(bookId);
	}
	@GetMapping("/review/profile/{userName}")
	public List<Review> getReviewByUserName(@PathVariable String userName){
		return reviewRepo.findByUserName(userName);
	}
}
