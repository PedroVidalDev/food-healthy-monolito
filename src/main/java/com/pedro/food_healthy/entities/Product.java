package com.pedro.food_healthy.entities;

import com.pedro.food_healthy.dtos.product.ProductCreateDTO;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity(name = "Product")
@Table(name = "tb_products")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Product {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String description;
    private Double price;
    private Integer quantity;
    private String category;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    public Product(ProductCreateDTO productCreateDTO) {
        this.name = productCreateDTO.name();
        this.description = productCreateDTO.description();
        this.price = productCreateDTO.price();
        this.quantity = productCreateDTO.quantity();
        this.category = productCreateDTO.category().name();
        this.createdAt = LocalDateTime.now();
        this.updatedAt = LocalDateTime.now();
    }

}
