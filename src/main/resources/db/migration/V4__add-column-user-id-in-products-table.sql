ALTER TABLE tb_products ADD COLUMN user_id BIGSERIAL NOT NULL;

ALTER TABLE tb_products ADD CONSTRAINT fk_product_user FOREIGN KEY (user_id) REFERENCES tb_users(id);