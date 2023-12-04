CREATE DATABASE badge_buddy;
DROP DATABASE badge_buddy;

-- Auth
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

-- Discord
CREATE TABLE discord_guilds
(
  id UUID PRIMARY KEY,
  guild_id BIGINT UNSIGNED NOT NULL UNIQUE,
  name VARCHAR(255) NOT NULL,
  icon TEXT,
  owner_id BIGINT UNSIGNED NOT NULL,
  description TEXT,
  nsfw_level TINYINT UNSIGNED NOT NULL,
)

CREATE TABLE discord_guilds_bot_settings
(
  id UUID PRIMARY KEY,
  guild_id UUID NOT NULL,
  private_channel_id BIGINT UNSIGNED NOT NULL UNIQUE,
  news_channel_id BIGINT UNSIGNED UNIQUE,
  poap_manager_role_id BIGINT UNSIGNED UNIQUE NOT NULL,
  FOREIGN KEY (guild_id) REFERENCES discord_guilds (id),
)
CREATE TABLE discord_users
(
  id UUID PRIMARY KEY,
  user_id BIGINT UNSIGNED NOT NULL UNIQUE,
  auth_account_id VARCHAR(255) UNIQUE,
  username VARCHAR(255) NOT NULL,
  discriminator VARCHAR(4) NOT NULL, -- tag
  avatar TEXT,
  FOREIGN KEY (guild_id) REFERENCES discord_guilds (id),
  FOREIGN KEY (auth_account_id) REFERENCES accounts (provider_account_id),
)

