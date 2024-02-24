package com.example.demo.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Model.Genre;

@Repository
public interface GenreRepo extends JpaRepository<Genre, Long>{
	
}
