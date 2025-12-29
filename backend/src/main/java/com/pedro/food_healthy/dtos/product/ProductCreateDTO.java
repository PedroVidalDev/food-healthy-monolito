package com.pedro.food_healthy.dtos.product;

import com.pedro.food_healthy.utils.ProductCategoryEnum;
import jakarta.persistence.Enumerated;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record ProductCreateDTO (
        @NotBlank
        String name,

        @NotBlank
        String description,

        @NotNull @Min(1)
        Double price,

        @NotNull @Min(0)
        Integer quantity,

        @NotBlank @Enumerated
        ProductCategoryEnum category
) {
}
