package com.pedro.food_healthy.middlewares;

import com.pedro.food_healthy.dtos.response.ResponseDTO;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@RestControllerAdvice
public class ErrorHandler {
    @ExceptionHandler(EntityNotFoundException.class)
    public ResponseEntity<ResponseDTO<String>> handleEntityNotFoundException(EntityNotFoundException e) {
        ResponseDTO<String> response = new ResponseDTO<>(404, null, e.getMessage());
        return ResponseEntity.status(404).body(response);
    }
}
