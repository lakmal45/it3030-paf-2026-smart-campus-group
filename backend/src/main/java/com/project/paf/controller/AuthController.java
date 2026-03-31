package com.project.paf.controller;

import com.project.paf.model.User;
import com.project.paf.repository.UserRepository;
import com.project.paf.service.UserService;
import jakarta.servlet.http.HttpSession;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class AuthController {

    private final UserService service;
    private final UserRepository repo;

    public AuthController(UserService service, UserRepository repo) {
        this.service = service;
        this.repo = repo;
    }

    // REGISTER
    @PostMapping("/signup")
    public User signup(@RequestBody User user) {
        return service.register(user);
    }

    // LOGIN
    @PostMapping("/login")
    public User login(@RequestBody User request, HttpSession session) {

        User user = service.login(request.getEmail(), request.getPassword());

        session.setAttribute("user", user);

        return user;
    }
}