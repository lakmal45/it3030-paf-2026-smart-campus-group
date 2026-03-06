package com.project.paf.controller;

import com.project.paf.model.Role;
import com.project.paf.model.User;
import com.project.paf.repository.UserRepository;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin(origins = "http://localhost:5173")
public class AdminController {

    private final UserRepository repo;

    public AdminController(UserRepository repo) {
        this.repo = repo;
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("/users/{id}/role")
    public User updateUserRole(@PathVariable Long id, @RequestParam Role role) {

        User user = repo.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found"));

        user.setRole(role);

        return repo.save(user);
    }
}