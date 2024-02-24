package com.example.demo.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Model.Author;
import com.example.demo.Repositories.AuthorRepo;

@Service
public class AuthorService {
	@Autowired
	AuthorRepo authorRepo;
	public boolean addAuthor(Author author) {
		authorRepo.save(author);
		return true;
	}
	public List<Author> getAuthors() {
		return authorRepo.findAll();
	}
	public boolean deleteAuthorById(long id) {
		authorRepo.deleteById(id);
		return true;
	}
	
}
