package com.example.demo.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Model.Genre;
import com.example.demo.Repositories.GenreRepo;

@Service
public class GenreService {
	@Autowired
	GenreRepo genreRepo;
	
	public boolean addGenre(Genre genre) {
		genreRepo.save(genre);
		return true;
	}
	public boolean getGenres() {
		// TODO Auto-generated method stub
		return false;
	}
	
}
