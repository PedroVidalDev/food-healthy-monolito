package com.pedro.food_healthy.dtos.user;

import jakarta.validation.constraints.NotBlank;

public record UserLoginDTO(
        @NotBlank
        String email,

        @NotBlank
        String password
) {
}
