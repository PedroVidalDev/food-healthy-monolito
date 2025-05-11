package com.pedro.food_healthy.repositories;

import com.pedro.food_healthy.entities.Ticket;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TicketRepository extends JpaRepository<Ticket, Long> {
}
