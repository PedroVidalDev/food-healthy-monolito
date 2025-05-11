package com.pedro.food_healthy.dtos.product;

import com.pedro.food_healthy.entities.Product;

public record ProductDTO(
    String name,
    String description,
    Double price,
    Integer quantity,
    String category
) {
    public ProductDTO(Product product) {
        this(
            product.getName(),
            product.getDescription(),
            product.getPrice(),
            product.getQuantity(),
            product.getCategory()
        );
    }
}
