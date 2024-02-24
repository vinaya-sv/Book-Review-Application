package com.example.demo.request;

import java.sql.Date;

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
public class RatingRequest {
	int ratingValue;
	String userEmail;
	long bookId;

}
