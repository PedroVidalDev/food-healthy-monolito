package com.pedro.food_healthy.repositories;

import com.pedro.food_healthy.entities.Ticket;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface TicketRepository extends JpaRepository<Ticket, Long> {

    @Query("SELECT t FROM Ticket t WHERE t.status = true AND t.expiredAt > CURRENT_DATE")
    List<Ticket> findAllAvailableTickets();
}
