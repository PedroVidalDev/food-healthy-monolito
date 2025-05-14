package com.pedro.food_healthy.controllers;

import com.pedro.food_healthy.dtos.helpMenu.HelpMenuCreateDTO;
import com.pedro.food_healthy.dtos.helpMenu.HelpMenuDTO;
import com.pedro.food_healthy.dtos.response.ResponseDTO;
import com.pedro.food_healthy.services.HelpMenuService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("helpMenus")
public class HelpMenuController {

    @Autowired
    private HelpMenuService helpMenuService;

    @PostMapping
    public ResponseEntity<ResponseDTO<HelpMenuDTO>> create(@RequestBody @Valid HelpMenuCreateDTO helpMenuCreateDTO) {
        HelpMenuDTO helpMenuDTO = helpMenuService.create(helpMenuCreateDTO);

        ResponseDTO<HelpMenuDTO> response = new ResponseDTO<>(201, helpMenuDTO, "HelpMenu created successfully");

        return ResponseEntity.status(201).body(response);
    }

    @GetMapping
    public ResponseEntity<ResponseDTO<HelpMenuDTO[]>> findAll() {
        HelpMenuDTO[] helpMenusDTO = helpMenuService.findAll();
        return ResponseEntity.ok(new ResponseDTO<>(200, helpMenusDTO, "HelpMenus retrieved successfully"));
    }

    @GetMapping("/{id}")
    public ResponseEntity<ResponseDTO<HelpMenuDTO>> findById(@PathVariable Long id) {
        HelpMenuDTO helpMenuDTO = helpMenuService.findById(id);

        return ResponseEntity.ok(new ResponseDTO<>(200, helpMenuDTO, "HelpMenu retrieved successfully"));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ResponseDTO<Void>> delete(@PathVariable Long id) {
        helpMenuService.delete(id);

        return ResponseEntity.ok(new ResponseDTO<>(200, null, "HelpMenu deleted successfully"));
    }
}
