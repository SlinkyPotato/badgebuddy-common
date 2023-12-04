-- Active: 1699630069601@@127.0.0.1@3306@badge_buddy

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
  guild_sid BIGINT UNSIGNED NOT NULL UNIQUE,
  name VARCHAR(255) NOT NULL,
  icon TEXT,
  owner_sid BIGINT UNSIGNED,
  description TEXT,
  nsfw_level TINYINT UNSIGNED NOT NULL
);

CREATE TABLE discord_guilds_bot_settings
(
  id UUID PRIMARY KEY,
  guild_id UUID NOT NULL unique,
  private_channel_sid BIGINT UNSIGNED NOT NULL UNIQUE,
  news_channel_sid BIGINT UNSIGNED UNIQUE,
  poap_manager_role_sid BIGINT UNSIGNED UNIQUE NOT NULL,
  FOREIGN KEY (guild_id) REFERENCES discord_guilds (id)
);

CREATE TABLE discord_users
(
  id UUID PRIMARY KEY,
  user_sid BIGINT UNSIGNED NOT NULL UNIQUE,
  auth_user_id UUID UNIQUE,
  username VARCHAR(255) NOT NULL,
  discriminator VARCHAR(4) NOT NULL, -- tag
  avatar TEXT,
  FOREIGN KEY (auth_user_id) REFERENCES accounts (id)
);


-- Community Events
CREATE TABLE community_events
(
  id UUID PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  start_date VARCHAR(28) NOT NULL,
  end_date VARCHAR(28) NOT NULL,
  image TEXT,
  website TEXT,
  poap_event_id INT -- https://documentation.poap.tech/reference/geteventsid
);

CREATE TABLE community_events_discord
(
  id UUID PRIMARY KEY,
  community_event_id UUID NOT NULL,
  guild_id UUID NOT NULL,
  organizer_id UUID NOT NULL,
  voice_channel_sid BIGINT UNSIGNED NOT NULL UNIQUE,
  FOREIGN KEY (community_event_id) REFERENCES community_events (id),
  FOREIGN KEY (guild_id) REFERENCES discord_guilds (id),
  FOREIGN KEY (organizer_id) REFERENCES discord_users (id)
);

-- POAPs
CREATE TABLE poap_claims
(
  id UUID PRIMARY KEY,
  qr_code VARCHAR(255) NOT NULL,
  claim_url VARCHAR(255) NOT NULL,
  community_event_id UUID NOT NULL,
  claimed_on VARCHAR(28),
  claimed_by_discord_user_id uuid,
  expires_on VARCHAR(28) NOT NULL,
  FOREIGN KEY (community_event_id) REFERENCES community_events (id),
  FOREIGN KEY (claimed_by_discord_user_id) REFERENCES discord_users (id)
);

-- POAPs Community Participants
CREATE TABLE community_participants_discord
(
  id UUID PRIMARY KEY,
  community_event_id UUID NOT NULL,
  discord_user_sid BIGINT UNSIGNED NOT NULL UNIQUE,
  start_date VARCHAR(28) NOT NULL,
  end_date VARCHAR(28),
  participation_length INT UNSIGNED, -- in seconds
  FOREIGN KEY (community_event_id) REFERENCES community_events_discord (community_event_id),
  FOREIGN KEY (discord_user_sid) REFERENCES discord_users (user_sid)
);

