package com.example.demo.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Model.Genre;
import com.example.demo.Services.GenreService;

@RestController
public class GenreController {
	@Autowired
	GenreService genreService;
	
	@PostMapping("/genre")
	public boolean addGenre(@RequestBody Genre genre) {
		return genreService.addGenre(genre);
	}
	
	@GetMapping("/genre")
	public boolean getGenres() {
		return genreService.getGenres();
	}
}
