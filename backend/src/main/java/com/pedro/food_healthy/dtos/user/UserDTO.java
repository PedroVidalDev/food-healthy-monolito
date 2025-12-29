package com.pedro.food_healthy.dtos.user;

import com.pedro.food_healthy.entities.User;

public record UserDTO (
        Long id,
        String name,
        String email,
        String phone,
        String role
) {
    public UserDTO(User user) {
        this(
            user.getId(),
            user.getName(),
            user.getEmail(),
            user.getPhone(),
            user.getRole().name()
        );
    }
}
