package com.example.demo.Repositories;

import java.util.Optional;
import com.example.demo.Model.User;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
	public boolean existsByEmail(String email);
    Optional<User> findByEmail(String email);
    Optional<User> findByName(String email);
}
