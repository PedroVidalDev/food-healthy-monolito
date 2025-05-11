package com.pedro.food_healthy.controllers;

import com.pedro.food_healthy.dtos.response.ResponseDTO;
import com.pedro.food_healthy.dtos.user.UserCreateDTO;
import com.pedro.food_healthy.dtos.user.UserDTO;
import com.pedro.food_healthy.dtos.user.UserLoginDTO;
import com.pedro.food_healthy.entities.User;
import com.pedro.food_healthy.services.AuthService;
import com.pedro.food_healthy.utils.TokenUtils;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class AuthController {
    @Autowired
    private AuthenticationManager manager;

    @Autowired
    private TokenUtils tokenUtils;

    @Autowired
    private AuthService authService;

    @PostMapping("/login")
    public ResponseEntity<ResponseDTO<UserDTO>> login(@RequestBody @Valid UserLoginDTO userLoginDTO) {
        var token = new UsernamePasswordAuthenticationToken(userLoginDTO.email(), userLoginDTO.password());
        var auth = manager.authenticate(token);
        var jwtToken = tokenUtils.generateToken((User) auth.getPrincipal());

        return ResponseEntity.ok(new ResponseDTO<>(200, new UserDTO((User) auth.getPrincipal()), jwtToken));
    }

    @PostMapping("/register")
    public ResponseEntity<ResponseDTO<UserDTO>> register(@RequestBody @Valid UserCreateDTO userCreateDTO) {
        UserDTO userDTO = authService.register(userCreateDTO);

        ResponseDTO<UserDTO> response = new ResponseDTO<>(201, userDTO, "User registered successfully");

        return ResponseEntity.status(201).body(response);
    }
}
