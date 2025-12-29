CREATE TABLE tb_order_products (
    id BIGSERIAL PRIMARY KEY,
    order_id BIGSERIAL NOT NULL,
    product_id BIGSERIAL NOT NULL,
    quantity INT NOT NULL,
    unit_price DECIMAL(10, 2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (order_id) REFERENCES tb_orders(id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES tb_products(id) ON DELETE CASCADE
)