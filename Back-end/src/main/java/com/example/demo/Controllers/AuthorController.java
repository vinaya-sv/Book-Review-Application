package com.example.demo.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Model.Author;
import com.example.demo.Services.AuthorService;

@RestController
public class AuthorController {
	@Autowired
	AuthorService authorService;
	
	@PostMapping("/author")
	public boolean addAuthor(@RequestBody Author author) {
		return authorService.addAuthor(author);
	}
	
	@GetMapping("/author")
	public List<Author> getAuthors(){
		return authorService.getAuthors();
	}
	
	@DeleteMapping("/author/{id}")
	public boolean deleteAuthor(@PathVariable long id) {
		return authorService.deleteAuthorById(id);
	}
}
