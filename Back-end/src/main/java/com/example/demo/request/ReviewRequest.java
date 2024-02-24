package com.example.demo.request;

import java.sql.Date;

import com.example.demo.Model.Book;
import com.example.demo.Model.User;

import jakarta.persistence.Entity;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.FieldDefaults;

@AllArgsConstructor
@NoArgsConstructor
@FieldDefaults(makeFinal = false, level=AccessLevel.PRIVATE)
@Getter
@Setter
public class ReviewRequest {
	String reviewComment;
	long bookId;
	String emailId;
}
