package com.project.paf.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.project.paf.model.User;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
}