package com.pedro.food_healthy.entities;

import com.pedro.food_healthy.dtos.ticket.TicketCreateDTO;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity(name = "Ticket")
@Table(name = "tb_tickets")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Ticket {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String description;
    private Integer value;
    private Boolean status;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    public Ticket(TicketCreateDTO ticketCreateDTO) {
        this.name = ticketCreateDTO.name();
        this.description = ticketCreateDTO.description();
        this.value = ticketCreateDTO.value();
        this.status = true;
        this.createdAt = LocalDateTime.now();
        this.updatedAt = LocalDateTime.now();
    }
}
