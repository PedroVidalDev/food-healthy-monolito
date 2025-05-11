package com.pedro.food_healthy.dtos.ticket;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record TicketCreateDTO(
        @NotBlank
        String name,

        @NotBlank
        String description,

        @NotNull @Min(1)
        Integer value
) {
}
