CREATE DATABASE badge_buddy;
DROP DATABASE badge_buddy;

CREATE TABLE users
(
  id UUID PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(320) UNIQUE NOT NULL,
  email_verified_on VARCHAR(28),
  password_hash VARCHAR(255),
  image TEXT
);

CREATE TABLE accounts
(
  id UUID PRIMARY KEY,
  user_id UUID NOT NULL,
  provider VARCHAR(255) NOT NULL,
  provider_account_id VARCHAR(255) NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users (id)
);

CREATE TABLE tokens
(
  id UUID PRIMARY KEY,
  account_id UUID NOT NULL,
  token TEXT NOT NULL,
  expires_on VARCHAR(28),
  type ENUM('access_token', 'refresh_token', 'id_token') NOT NULL,
  scope TEXT,
  FOREIGN KEY (account_id) REFERENCES accounts (id)
);

-- CREATE TABLE sessions
-- (
--   id UUID PRIMARY KEY,
--   user_id UUID NOT NULL,
--   expires_on VARCHAR(28) NOT NULL,
--   session_token UUID NOT NULL UNIQUE,
--   FOREIGN KEY (user_id) REFERENCES users (id)
-- );

