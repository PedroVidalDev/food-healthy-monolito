INSERT INTO tb_users (
    id,
    name,
    email,
    password,
    role,
    created_at,
    updated_at
) VALUES (
     1,  -- ID fixo para o root
     'root',
     'root@healthy.com',
     '$2a$10$XptfskLsT1l/bRTLRiiCgejHqOpgXFreUnNUa35gJdCr2v2QbVFzu',
     'ADMIN',
     CURRENT_TIMESTAMP,
     CURRENT_TIMESTAMP
 );