package com.example.demo.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.Model.Rating;

@Repository
public interface RatingRepo extends JpaRepository<Rating, Long>{
	public boolean existsByUserId(long id);
	public boolean existsByBookId(long id);
	public List<Rating> findByUserIdAndBookId(Long id, Long bookId);
	
	@Query(value="select avg(rating_value) from rating where book_id =?1", nativeQuery = true)
	public int getAverageRating(long bookId);
}
