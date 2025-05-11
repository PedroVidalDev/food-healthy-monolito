package com.pedro.food_healthy.controllers;

import com.pedro.food_healthy.dtos.product.ProductCreateDTO;
import com.pedro.food_healthy.dtos.product.ProductDTO;
import com.pedro.food_healthy.dtos.response.ResponseDTO;
import com.pedro.food_healthy.services.ProductService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/products")
public class ProductController {

    @Autowired
    private ProductService productService;

    @PostMapping
    public ResponseEntity<ResponseDTO<ProductDTO>> create(@RequestBody @Valid ProductCreateDTO productCreateDTO) {
        ProductDTO productDTO = productService.create(productCreateDTO);

        ResponseDTO<ProductDTO> response = new ResponseDTO<>(201, productDTO, "Product created successfully");

        return ResponseEntity.status(201).body(response);
    }

    @GetMapping
    public ResponseEntity<ResponseDTO<ProductDTO[]>> findAll() {
        ProductDTO[] productsDTO = productService.findAll();
        return ResponseEntity.ok(new ResponseDTO<>(200, productsDTO, "Products retrieved successfully"));
    }

    @GetMapping("/{id}")
    public ResponseEntity<ResponseDTO<ProductDTO>> findById(@PathVariable Long id) {
        ProductDTO productDTO = productService.findById(id);

        return ResponseEntity.ok(new ResponseDTO<>(200, productDTO, "Product retrieved successfully"));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ResponseDTO<Void>> delete(@PathVariable Long id) {
        productService.delete(id);

        return ResponseEntity.ok(new ResponseDTO<>(200, null, "Product deleted successfully"));
    }
}
