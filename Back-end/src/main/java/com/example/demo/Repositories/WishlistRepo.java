package com.example.demo.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.Model.Wishlist;

@Repository
public interface WishlistRepo extends JpaRepository<Wishlist, Long>{
	public boolean existsByUserIdAndBookId(long userId, long bookId);
	@Query(value="delete from wishlist where user_id=?1 and book_id=?2",nativeQuery=true)
	public long deleteByUserIdAndBookId(long userId, long bookId);
}

