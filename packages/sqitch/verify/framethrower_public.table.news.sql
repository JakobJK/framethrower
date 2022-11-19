-- Verify flipr:framethrower_public.table.news on pg

BEGIN;

  CREATE OR REPLACE FUNCTION framethrower_public.test_news() RETURNS BOOLEAN AS $$
    DECLARE profile1 framethrower_public.profile;
    BEGIN

    INSERT INTO framethrower_public.profile(username, firstname, lastname) VALUES ('myUserName', 'MrJackson', 'ForReal') RETURNING * INTO profile1;


    INSERT INTO framethrower_public.news(
      title,
      body,
      profile_id,
      intro,
      thumbnail
    ) values (
      'sillyProfileName908',
      'Jake',
      profile1.id,
      'lol',
      'thumbnail-image.jpg'
    );

    PERFORM 1/COUNT(*) FROM framethrower_public.news
    WHERE title = 'sillyProfileName908';

    RETURN true;
  END;
  $$ LANGUAGE plpgsql;

  SELECT framethrower_public.test_news();

ROLLBACK;
