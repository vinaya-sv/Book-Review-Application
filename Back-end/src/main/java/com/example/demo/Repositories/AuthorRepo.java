package com.example.demo.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Model.Author;

public interface AuthorRepo extends JpaRepository<Author, Long>{
	public boolean existsAuthorByAuthorName(String name);
	public Author findByAuthorName(String name);
}
