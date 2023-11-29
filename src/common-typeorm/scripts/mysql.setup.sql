CREATE DATABASE badge_buddy;
DROP DATABASE badge_buddy;

CREATE TABLE users
(
  id UUID PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(320) UNIQUE,
  email_verified_on VARCHAR(28),
  password_hash VARCHAR(255),
  image TEXT
);

CREATE TABLE accounts
(
  id UUID PRIMARY KEY,
  user_id UUID NOT NULL,
  type VARCHAR(255) NOT NULL,
  provider VARCHAR(255) NOT NULL,
  provider_account_id VARCHAR(255) NOT NULL,
  refresh_token TEXT,
  access_token TEXT,
  expires_on VARCHAR(28),
  token_type VARCHAR(255),
  scope TEXT,
  id_token TEXT,
  session_state TEXT,
  FOREIGN KEY (user_id) REFERENCES users (id)
);

CREATE TABLE sessions
(
  id UUID PRIMARY KEY,
  user_id UUID NOT NULL,
  expires_on VARCHAR(28) NOT NULL,
  session_token UUID NOT NULL UNIQUE,
  FOREIGN KEY (user_id) REFERENCES users (id)
);
