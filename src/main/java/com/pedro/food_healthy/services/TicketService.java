package com.pedro.food_healthy.services;

import com.pedro.food_healthy.dtos.ticket.TicketCreateDTO;
import com.pedro.food_healthy.dtos.ticket.TicketDTO;
import com.pedro.food_healthy.entities.Ticket;
import com.pedro.food_healthy.entities.User;
import com.pedro.food_healthy.repositories.TicketRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TicketService {

    @Autowired
    private TicketRepository ticketRepository;

    @Autowired
    private AuthService authService;

    public TicketDTO create(TicketCreateDTO ticketCreateDTO) {
        Ticket ticket = new Ticket(ticketCreateDTO);

        User user = authService.getAuthenticatedUser().orElseThrow(() -> new EntityNotFoundException("User not found"));
        ticket.setUser(user);

        ticketRepository.save(ticket);

        return new TicketDTO(ticket);
    }

    public TicketDTO[] findAll() {
        return this.ticketRepository.findAllAvailableTickets().stream().map(TicketDTO::new).toArray(TicketDTO[]::new);
    }

    public TicketDTO findById(Long id) {
        Ticket ticket = this.ticketRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("Ticket not found"));

        return new TicketDTO(ticket);
    }

    public void delete(Long id) {
        Ticket ticket = this.ticketRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("Ticket not found"));

        this.ticketRepository.delete(ticket);
    }
}
