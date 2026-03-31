package com.project.paf.controller;

import com.project.paf.model.Role;
import com.project.paf.model.User;
import com.project.paf.repository.UserRepository;
import jakarta.servlet.http.HttpSession;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin(origins = "http://localhost:5173")
public class AdminController {

    private final UserRepository repo;

    public AdminController(UserRepository repo) {
        this.repo = repo;
    }

    /**
     * Guard: resolves the current admin from either:
     *  1. The Spring HttpSession (set by AuthController.login)
     *  2. The X-User-Email header (sent by the frontend as a fallback)
     * Then verifies the resolved user has ADMIN role in the DB.
     */
    private void requireAdmin(HttpSession session, String emailHeader) {

        User resolved = null;

        // ── 1. Try session first ──────────────────────────────────────────────
        Object sessionAttr = session.getAttribute("user");
        if (sessionAttr instanceof User) {
            resolved = (User) sessionAttr;
        }

        // ── 2. Fall back to email header – re-verify from DB ─────────────────
        if (resolved == null && emailHeader != null && !emailHeader.isBlank()) {
            resolved = repo.findByEmail(emailHeader).orElse(null);
        }

        if (resolved == null) {
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Not logged in");
        }

        if (resolved.getRole() != Role.ADMIN) {
            throw new ResponseStatusException(HttpStatus.FORBIDDEN, "Admin access required");
        }
    }

    // ── GET all users ─────────────────────────────────────────────────────────
    @GetMapping("/users")
    public ResponseEntity<List<User>> getAllUsers(
            HttpSession session,
            @RequestHeader(value = "X-User-Email", required = false) String emailHeader) {

        requireAdmin(session, emailHeader);
        return ResponseEntity.ok(repo.findAll());
    }

    // ── UPDATE user role ──────────────────────────────────────────────────────
    @PutMapping("/users/{id}/role")
    public ResponseEntity<User> updateUserRole(
            @PathVariable Long id,
            @RequestParam Role role,
            HttpSession session,
            @RequestHeader(value = "X-User-Email", required = false) String emailHeader) {

        requireAdmin(session, emailHeader);

        User user = repo.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found"));

        user.setRole(role);
        return ResponseEntity.ok(repo.save(user));
    }

    // ── DELETE user ───────────────────────────────────────────────────────────
    @DeleteMapping("/users/{id}")
    public ResponseEntity<Void> deleteUser(
            @PathVariable Long id,
            HttpSession session,
            @RequestHeader(value = "X-User-Email", required = false) String emailHeader) {

        requireAdmin(session, emailHeader);
        repo.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}