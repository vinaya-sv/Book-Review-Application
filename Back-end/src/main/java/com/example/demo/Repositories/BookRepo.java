package com.example.demo.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.Model.Book;

public interface BookRepo extends JpaRepository<Book, Long> {
	public boolean existsBookByBookName(String name);
	public List<Book> findByBookName(String BookName);
	
	@Query(value="select * from book where book_id in (select book_id from wishlist where user_id=?1)",nativeQuery = true)
	public List<Book> getBookFromWishlist(long userId);
}
