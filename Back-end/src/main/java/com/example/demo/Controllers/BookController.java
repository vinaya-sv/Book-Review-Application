package com.example.demo.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Model.Book;
import com.example.demo.Services.BookService;
import com.example.demo.request.BookRequest;

@RestController
//@CrossOrigin("*")
public class BookController {
	@Autowired
	BookService bookService;
	@PostMapping("/book")
	public boolean addBook(@RequestBody Book book) {
		return bookService.addBook(book);
	}
	@GetMapping("/book")
	public List<Book> getAllBooks(){
		return bookService.getAllBooks();
	}
	
	@GetMapping("/book/wishlist/{userEmail}")
	public List<Book> getBooksFromWishlist(@PathVariable String userEmail){
		return bookService.getBooksFromWishlist(userEmail);
	}
	
	@GetMapping("/book/wishlist/profile/{userName}")
	public List<Book> getBooksFromWishlistByName(@PathVariable String userName){
		return bookService.getBooksFromWishlistByName(userName);
	}
	
	@DeleteMapping("/delete/{id}")
	public boolean deleteBook(@PathVariable long id) {
		return bookService.deleteBookById(id);
	}
	
	@GetMapping("/book/sort/{field}/asc")
	public List<Book> getBookSortedAscending(@PathVariable String field){
		return bookService.getBooksSortedAscending(field);
	}
	
	@GetMapping("/book/sort/{field}/desc")
	public List<Book> getBookSortedDescending(@PathVariable String field){
		return bookService.getBooksSortedDescending(field);
	}
	
	@PostMapping("/book/addRating/{bookId}")
	public void addRating(@PathVariable long bookId) {
		bookService.addRating(bookId);
	}
}
