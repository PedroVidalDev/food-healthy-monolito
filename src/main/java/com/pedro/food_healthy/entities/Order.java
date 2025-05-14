package com.pedro.food_healthy.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@Entity(name = "Order")
@Table(name = "tb_orders")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Order {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "ticket_id")
    private Ticket ticket;

    @JoinColumn(name = "total_price")
    private Double totalPrice;

    @ManyToMany
    @JoinTable(
        name = "tb_order_products",
        joinColumns = @JoinColumn(name = "order_id"),
        inverseJoinColumns = @JoinColumn(name = "product_id")
    )
    private List<Product> products;

    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
