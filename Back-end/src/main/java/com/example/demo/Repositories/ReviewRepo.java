package com.example.demo.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Model.Review;

@Repository
public interface ReviewRepo extends JpaRepository<Review, Long>{
	public List<Review> findByBookId(long bookId);
	public List<Review> findByUserName(String userName);
}
