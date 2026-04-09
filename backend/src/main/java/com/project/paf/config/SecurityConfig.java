package com.project.paf.config;

import com.project.paf.modules.auth.service.OAuth2LoginSuccessHandler;
import com.project.paf.modules.user.repository.UserRepository;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;
import java.util.List;

@Configuration
@EnableWebSecurity
@EnableMethodSecurity
public class SecurityConfig {

    private final UserRepository userRepository;

    public SecurityConfig(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf(csrf -> csrf.disable())
                .cors(cors -> cors.configurationSource(corsConfigurationSource()))
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/api/auth/**", "/login/**", "/oauth2/**").permitAll()
                        .anyRequest().authenticated())
                .oauth2Login(oauth2 -> oauth2
                        .successHandler(new OAuth2LoginSuccessHandler(userRepository)));

        return http.build();
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(List.of("http://localhost:5173"));
        configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"));
        configuration
                .setAllowedHeaders(Arrays.asList("Authorization", "Content-Type", "X-Requested-With", "X-User-Email"));
        configuration.setAllowCredentials(true);

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }<<<<<<<<<

    Temporary merge branch 1=========

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {

        http
                .cors(cors -> cors.configurationSource(corsConfigurationSource()))
                .csrf(AbstractHttpConfigurer::disable)

                .authorizeHttpRequests(auth -> auth

                        // public endpoints
                        .requestMatchers("/", "/api/auth/**").permitAll()

                        // admin endpoints – session check is handled manually in AdminController
                        .requestMatchers("/api/admin/**").permitAll()

                        // booking endpoints
                        .requestMatchers("/api/bookings/**")
                        .hasAnyRole("USER", "ADMIN", "MANAGER")

                        // technician endpoints
                        .requestMatchers("/api/tickets/update/**")
                        .hasRole("TECHNICIAN")

                        // manager endpoints
                        .requestMatchers("/api/reports/**")
                        .hasRole("MANAGER")

                        // Member 3 – ticket endpoints (role checks done via @PreAuthorize)
                        .requestMatchers("/api/tickets/**").authenticated()

                        .anyRequest().authenticated())

                // Return 401/403 JSON for API calls instead of redirecting to OAuth2
                .exceptionHandling(ex -> ex
                        .authenticationEntryPoint((request, response, authException) -> {
                            response.setContentType("application/json");
                            response.setStatus(401);
                            response.getWriter().write("{\"error\":\"Unauthorized\"}");
                        })
                        .accessDeniedHandler((request, response, accessDeniedException) -> {
                            response.setContentType("application/json");
                            response.setStatus(403);
                            response.getWriter().write("{\"error\":\"Forbidden\"}");
                        }))

                .oauth2Login(oauth -> oauth
                        .defaultSuccessUrl("http://localhost:5173/dashboard", true)
                        .successHandler(new OAuth2LoginSuccessHandler(userRepository)))

                .logout(logout -> logout
                        .logoutUrl("/logout")
                        .logoutSuccessUrl("http://localhost:5173/login")
                        .invalidateHttpSession(true)
                        .clearAuthentication(true)
                        .deleteCookies("JSESSIONID"));

        return http.build();
    }>>>>>>>>>

    Temporary merge branch 2
}