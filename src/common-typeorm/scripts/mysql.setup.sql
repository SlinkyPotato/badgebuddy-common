-- Active: 1703696789164@@127.0.0.1@3306@badge_buddy

CREATE DATABASE badge_buddy;
DROP DATABASE badge_buddy;

-- Auth
CREATE TABLE users
(
  id UUID PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(320) UNIQUE NOT NULL,
  email_verified_on DATETIME,
  password_hash VARCHAR(255),
  image TEXT
);

CREATE TABLE accounts
(
  id UUID PRIMARY KEY,
  user_id UUID NOT NULL,
  provider VARCHAR(255) NOT NULL,
  provider_account_id VARCHAR(255) NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users (id),
  UNIQUE KEY unique_account_provider (provider, provider_account_id),
  INDEX provider_account_idx (provider_account_id)
);

CREATE TABLE tokens
(
  account_id UUID NOT NULL,
  token TEXT NOT NULL,
  expires_on DATETIME,
  type ENUM('access_token', 'refresh_token', 'id_token') NOT NULL,
  scope TEXT,
  FOREIGN KEY (account_id) REFERENCES accounts (id),
  PRIMARY KEY (account_id, type)
);

-- Discord

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

CREATE TABLE discord_bot_settings
(
  id UUID PRIMARY KEY,
  guild_sid BIGINT UNSIGNED NOT NULL UNIQUE,
  name VARCHAR(255) NOT NULL,
  icon TEXT,
  description TEXT,
  private_channel_sid BIGINT UNSIGNED NOT NULL UNIQUE,
  news_channel_sid BIGINT UNSIGNED UNIQUE,
  poap_manager_role_sid BIGINT UNSIGNED UNIQUE NOT NULL
);


-- Community Events
CREATE TABLE community_events
(
  id UUID PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  start_date DATETIME NOT NULL,
  end_date DATETIME NOT NULL,
  image TEXT,
  website TEXT,
  poap_event_id INT -- https://documentation.poap.tech/reference/geteventsid
);

CREATE TABLE community_events_discord
(
  community_event_id UUID NOT NULL UNIQUE,
  bot_settings_id UUID NOT NULL,
  organizer_id UUID NOT NULL,
  voice_channel_sid BIGINT UNSIGNED NOT NULL,
  FOREIGN KEY (community_event_id) REFERENCES community_events (id),
  FOREIGN KEY (bot_settings_id) REFERENCES discord_bot_settings (id),
  FOREIGN KEY (organizer_id) REFERENCES discord_users (id),
  INDEX voice_channel_sid_idx (voice_channel_sid)
);

-- POAPs
CREATE TABLE poap_links
(
  id UUID PRIMARY KEY,
  qr_code VARCHAR(255) UNIQUE,
  claim_url VARCHAR(255) NOT NULL UNIQUE,
  community_event_id UUID NOT NULL,
  FOREIGN KEY (community_event_id) REFERENCES community_events (id),
  INDEX qr_code_idx (qr_code)
);

CREATE TABLE poap_discord_claims
(
  poap_link_id UUID PRIMARY KEY,
  assigned_discord_user_sid BIGINT UNSIGNED NOT NULL,
  assigned_discord_user_id UUID,
  assigned_on DATETIME,
  claimed_on DATETIME,
  expires_on DATETIME NOT NULL,
  FOREIGN KEY (poap_link_id) REFERENCES poap_links (id),
  FOREIGN KEY (assigned_discord_user_id) REFERENCES discord_users (id)
);

-- POAPs Community Participants
CREATE TABLE community_participants_discord
(
  community_event_id UUID NOT NULL,
  discord_user_sid BIGINT UNSIGNED NOT NULL,
  start_date DATETIME NOT NULL,
  end_date DATETIME,
  participation_length INT UNSIGNED, -- in seconds
  FOREIGN KEY (community_event_id) REFERENCES community_events_discord (community_event_id),
  FOREIGN KEY (discord_user_sid) REFERENCES discord_users (user_sid),
  PRIMARY KEY (community_event_id, discord_user_sid)
);
