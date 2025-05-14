package com.pedro.food_healthy.dtos.helpMenu;

import com.pedro.food_healthy.entities.HelpMenu;

public record HelpMenuDTO(
    String image,
    String title,
    String subtitle,
    String content
) {
    public HelpMenuDTO(HelpMenu helpMenu) {
        this(
            helpMenu.getImage(),
            helpMenu.getTitle(),
            helpMenu.getSubtitle(),
            helpMenu.getContent()
        );
    }
}
