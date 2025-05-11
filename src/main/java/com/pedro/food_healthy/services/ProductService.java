package com.pedro.food_healthy.services;

import com.pedro.food_healthy.dtos.product.ProductCreateDTO;
import com.pedro.food_healthy.dtos.product.ProductDTO;
import com.pedro.food_healthy.entities.Product;
import com.pedro.food_healthy.repositories.ProductRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    public ProductDTO create(ProductCreateDTO productCreateDTO) {
        Product product = new Product(productCreateDTO);

        productRepository.save(product);

        return new ProductDTO(product);
    }

    public ProductDTO[] findAll() {
        return productRepository.findAll()
            .stream()
            .map(ProductDTO::new)
            .toArray(ProductDTO[]::new);
    }

    public ProductDTO findById(Long id) {
        Product product = productRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("Product not found"));

        return new ProductDTO(product);
    }

    public void delete(Long id) {
        Product product = productRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("Product not found"));

        productRepository.delete(product);
    }
}
