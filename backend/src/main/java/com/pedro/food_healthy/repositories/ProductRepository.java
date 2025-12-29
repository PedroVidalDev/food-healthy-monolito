package com.pedro.food_healthy.repositories;

import com.pedro.food_healthy.entities.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {
}
