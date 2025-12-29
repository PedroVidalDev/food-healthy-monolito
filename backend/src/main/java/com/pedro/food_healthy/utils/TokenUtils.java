package com.pedro.food_healthy.utils;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTCreationException;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.pedro.food_healthy.entities.User;
import org.springframework.stereotype.Service;

@Service
public class TokenUtils {
    public String generateToken(User user) {
        try {
            var algorithm = Algorithm.HMAC256("secret");
            return JWT.create()
                    .withIssuer("API HEALTHY")
                    .withSubject(user.getEmail())
                    .withClaim("id", user.getId())
                    .sign(algorithm);
        } catch (JWTCreationException e) {
            throw new RuntimeException("Error while generating token", e);
        }
    }

    public String getSubject(String token) {
        try {
            var algorithm = Algorithm.HMAC256("secret");
            return JWT.require(algorithm)
                    .withIssuer("API HEALTHY")
                    .build()
                    .verify(token)
                    .getSubject();
        } catch (JWTVerificationException e) {
            throw new RuntimeException("Error while getting subject from token", e);
        }
    }
}
