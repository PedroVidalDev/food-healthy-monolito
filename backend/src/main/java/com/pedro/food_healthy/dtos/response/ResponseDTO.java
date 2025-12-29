package com.pedro.food_healthy.dtos.response;

public record ResponseDTO<T>(Integer status, T data, String message) {
}
