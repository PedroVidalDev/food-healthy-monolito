package com.pedro.food_healthy.services;

import com.pedro.food_healthy.dtos.user.UserCreateDTO;
import com.pedro.food_healthy.dtos.user.UserDTO;
import com.pedro.food_healthy.entities.User;
import com.pedro.food_healthy.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class AuthService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    public UserDTO register(UserCreateDTO userCreateDTO) {
        User user = new User(userCreateDTO);

        userRepository.save(user);

        return new UserDTO(user);
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return userRepository.findByEmail(username);
    }
}
