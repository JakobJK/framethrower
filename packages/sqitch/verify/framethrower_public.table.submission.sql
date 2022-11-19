-- Verify flipr:framethrower_public.table.submission on pg

BEGIN;

  CREATE OR REPLACE FUNCTION framethrower_public.test_animation() RETURNS BOOLEAN AS $$
    DECLARE profile1 framethrower_public.profile;
    DECLARE animation1 framethrower_public.animation;
    BEGIN

    INSERT INTO framethrower_public.profile(username, firstname, lastname) VALUES ('Yooohooo', 'MrJackson', 'ForReal') RETURNING * INTO profile1;

    INSERT INTO framethrower_public.animation(
      title,
      profile_id
    ) values (
      'My_Animation',
      profile1.id
    ) RETURNING * INTO animation1;

    INSERT INTO framethrower_public.submission (thumbnail_url, animation_id, start_frame, end_frame, comment) VALUES ('this-is-such-a-random-ass-url', animation1.id, 1, 240, 'What a comment!');

    PERFORM 1/COUNT(*) FROM framethrower_public.submission
    WHERE thumbnail_url = 'this-is-such-a-random-ass-url';

    RETURN true;
  END;
  $$ LANGUAGE plpgsql;

  SELECT framethrower_public.test_animation();

ROLLBACK;