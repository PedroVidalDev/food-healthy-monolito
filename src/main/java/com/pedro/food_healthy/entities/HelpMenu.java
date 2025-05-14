package com.pedro.food_healthy.entities;

import com.pedro.food_healthy.dtos.helpMenu.HelpMenuCreateDTO;
import com.pedro.food_healthy.dtos.ticket.TicketCreateDTO;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity(name = "HelpMenu")
@Table(name = "tb_help_menus")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class HelpMenu {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String image;
    private String title;
    private String subtitle;
    private String content;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    public HelpMenu(HelpMenuCreateDTO helpMenuCreateDTO) {
        this.image = helpMenuCreateDTO.image();
        this.title = helpMenuCreateDTO.title();
        this.subtitle = helpMenuCreateDTO.subtitle();
        this.content = helpMenuCreateDTO.content();
        this.createdAt = LocalDateTime.now();
        this.updatedAt = LocalDateTime.now();
    }
}
