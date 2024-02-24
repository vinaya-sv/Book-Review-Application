package com.example.demo.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Model.Wishlist;
import com.example.demo.Repositories.UserRepository;
import com.example.demo.Repositories.WishlistRepo;

@CrossOrigin("*")
@RestController
public class WishlistController {
	@Autowired
	WishlistRepo wishlistRepo;
	@Autowired
	UserRepository userRepo;
	
	@PostMapping("/wishlist/{userEmail}/{bookId}")
	public void addToWishlist(@PathVariable String userEmail, @PathVariable long bookId) {
		long userId=userRepo.findByEmail(userEmail).get().getId();
		if(wishlistRepo.existsByUserIdAndBookId(userId,bookId)) {
//			wishlistRepo.deleteByUserIdAndBookId(userId, bookId);
			return;
		}
		Wishlist wishlist=new Wishlist();
		wishlist.setBookId(bookId);
		wishlist.setUserId(userId);
		wishlistRepo.save(wishlist);
	}
	
	@GetMapping("/wishlist/{userEmail}/{bookId}")
	public boolean doesBookExistInWishlist(@PathVariable String userEmail, @PathVariable long bookId) {
		long userId=userRepo.findByEmail(userEmail).get().getId();
		return wishlistRepo.existsByUserIdAndBookId(userId, bookId);
	}
}
