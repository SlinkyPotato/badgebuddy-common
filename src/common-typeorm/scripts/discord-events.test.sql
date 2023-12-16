INSERT INTO community_events (id, title, description, start_date, end_date, image, website, poap_event_id)
VALUES 
  (uuid(), 'Event Title', 'Event Description', '2023-01-01 00:00:00', '2023-01-02 00:00:00', 'image_url.jpg', 'https://eventwebsite.com', 12345);

SELECT *
FROM community_events_discord d, community_events c, discord_users u, discord_bot_settings b
WHERE d.community_event_id = c.id
  AND d.organizer_id = u.id
  AND d.bot_settings_id = b.id
  AND b.guild_sid = '1234'
  AND d.voice_channel_sid = '1234'
  AND u.user_sid = '1234';