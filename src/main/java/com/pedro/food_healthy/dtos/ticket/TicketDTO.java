package com.pedro.food_healthy.dtos.ticket;

import com.pedro.food_healthy.entities.Ticket;

public record TicketDTO(
        Long id,
        String name,
        String description,
        Integer value
) {
    public TicketDTO(Ticket ticket) {
        this(
            ticket.getId(),
            ticket.getName(),
            ticket.getDescription(),
            ticket.getValue()
        );
    }
}
