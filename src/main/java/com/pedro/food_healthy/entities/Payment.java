package com.pedro.food_healthy.entities;

import com.pedro.food_healthy.utils.PaymentStatusEnum;
import com.pedro.food_healthy.utils.PaymentTypeEnum;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity(name = "Payment")
@Table(name = "tb_payments")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Payment {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    @JoinColumn(name = "order_id")
    private Order order;

    @JoinColumn(name = "payment_type")
    private PaymentTypeEnum paymentType;

    @JoinColumn(name = "status")
    private PaymentStatusEnum status;
}
