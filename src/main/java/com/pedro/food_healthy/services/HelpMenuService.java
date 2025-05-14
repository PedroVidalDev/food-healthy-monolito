package com.pedro.food_healthy.services;

import com.pedro.food_healthy.dtos.helpMenu.HelpMenuCreateDTO;
import com.pedro.food_healthy.dtos.helpMenu.HelpMenuDTO;
import com.pedro.food_healthy.entities.HelpMenu;
import com.pedro.food_healthy.entities.User;
import com.pedro.food_healthy.repositories.HelpMenuRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class HelpMenuService {

    @Autowired
    private HelpMenuRepository helpMenuRepository;

    @Autowired
    private AuthService authService;

    public HelpMenuDTO create(HelpMenuCreateDTO helpMenuCreateDTO) {
        HelpMenu helpMenu = new HelpMenu(helpMenuCreateDTO);

        User user = authService.getAuthenticatedUser().orElseThrow(() -> new EntityNotFoundException("User not found"));
        helpMenu.setUser(user);

        helpMenuRepository.save(helpMenu);

        return new HelpMenuDTO(helpMenu);
    }

    public HelpMenuDTO[] findAll() {
        return this.helpMenuRepository.findAll().stream().map(HelpMenuDTO::new).toArray(HelpMenuDTO[]::new);
    }

    public HelpMenuDTO findById(Long id) {
        HelpMenu helpMenu = this.helpMenuRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("HelpMenu not found"));

        return new HelpMenuDTO(helpMenu);
    }

    public void delete(Long id) {
        HelpMenu helpMenu = this.helpMenuRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("HelpMenu not found"));

        this.helpMenuRepository.delete(helpMenu);
    }
}
