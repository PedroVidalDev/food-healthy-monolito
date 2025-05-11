ALTER TABLE tb_tickets ADD COLUMN user_id BIGINT;

ALTER TABLE tb_tickets ADD CONSTRAINT fk_product_user FOREIGN KEY (user_id) REFERENCES tb_users(id);