package com.example.demo.Model;

import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
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
@Entity
public class Rating {
	@Id
	@GeneratedValue(strategy =GenerationType.IDENTITY)
	long ratingId;
	int ratingValue;
	long userId;
	long bookId;
	
}
