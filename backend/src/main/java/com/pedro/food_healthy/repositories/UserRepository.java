package com.pedro.food_healthy.repositories;

import com.pedro.food_healthy.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    UserDetails findByEmail(String username);

    @Query("SELECT u from User u where u.email = :email")
    Optional<User> findUserByEmail(String email);
}
