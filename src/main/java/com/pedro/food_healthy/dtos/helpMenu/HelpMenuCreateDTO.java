package com.pedro.food_healthy.dtos.helpMenu;

import jakarta.validation.constraints.NotBlank;

public record HelpMenuCreateDTO (
    @NotBlank
    String image,

    @NotBlank
    String title,

    @NotBlank
    String subtitle,

    @NotBlank
    String content
) {
}
