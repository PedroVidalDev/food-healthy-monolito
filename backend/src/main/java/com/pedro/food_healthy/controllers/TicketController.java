package com.pedro.food_healthy.controllers;

import com.pedro.food_healthy.dtos.response.ResponseDTO;
import com.pedro.food_healthy.dtos.ticket.TicketCreateDTO;
import com.pedro.food_healthy.dtos.ticket.TicketDTO;
import com.pedro.food_healthy.services.TicketService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("tickets")
public class TicketController {

    @Autowired
    private TicketService ticketService;

    @PostMapping
    public ResponseEntity<ResponseDTO<TicketDTO>> create(@RequestBody @Valid TicketCreateDTO ticketCreateDTO) {
        TicketDTO ticketDTO = ticketService.create(ticketCreateDTO);

        ResponseDTO<TicketDTO> response = new ResponseDTO<>(201, ticketDTO, "Ticket created successfully");

        return ResponseEntity.status(201).body(response);
    }

    @GetMapping
    public ResponseEntity<ResponseDTO<TicketDTO[]>> findAll() {
        TicketDTO[] ticketsDTO = ticketService.findAll();
        return ResponseEntity.ok(new ResponseDTO<>(200, ticketsDTO, "Tickets retrieved successfully"));
    }

    @GetMapping("/{id}")
    public ResponseEntity<ResponseDTO<TicketDTO>> findById(@PathVariable Long id) {
        TicketDTO ticketDTO = ticketService.findById(id);

        return ResponseEntity.ok(new ResponseDTO<>(200, ticketDTO, "Ticket retrieved successfully"));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ResponseDTO<Void>> delete(@PathVariable Long id) {
        ticketService.delete(id);

        return ResponseEntity.ok(new ResponseDTO<>(200, null, "Ticket deleted successfully"));
    }
}
