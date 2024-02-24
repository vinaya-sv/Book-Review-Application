package com.example.demo.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.example.demo.Model.Author;
import com.example.demo.Model.Book;
import com.example.demo.Repositories.AuthorRepo;
import com.example.demo.Repositories.BookRepo;
import com.example.demo.Repositories.UserRepository;
import com.example.demo.request.BookRequest;
 
@Service
public class BookService {
	@Autowired
	BookRepo bookRepo;
	@Autowired
	AuthorRepo authorRepo;
	@Autowired
	UserRepository userRepo;
	
	public List<Book> getAllBooks() {
		return bookRepo.findAll();
	}
	
	public List<Book> getBooksFromWishlist(String userEmail){
		long userId=userRepo.findByEmail(userEmail).get().getId();
		return bookRepo.getBookFromWishlist(userId);
	}
	
	public List<Book> getBooksFromWishlistByName(String userName) {
		long userId=userRepo.findByName(userName).get().getId();
		return bookRepo.getBookFromWishlist(userId);
	}
	
	public boolean addBook(Book book) {
		if(bookRepo.existsBookByBookName(book.getBookName()))
			return false;
		bookRepo.save(book);		
		return true;
	}
	public boolean deleteBookById(long id) {
		if(!bookRepo.existsById(id))
			return false;
		bookRepo.deleteById(id);
		return true;
	}
	
	public List<Book> getBooksSortedAscending(String field){
		return bookRepo.findAll(Sort.by(Sort.Direction.ASC,field));		
	}

	public List<Book> getBooksSortedDescending(String field){
		return bookRepo.findAll(Sort.by(Sort.Direction.DESC,field));		
	}
	
	public void addRating(long bookId) {
		bookRepo.findById(bookId).get().setBookRating(bookRepo.findById(bookId).get().getBookRating()+1);
	}

	
}
