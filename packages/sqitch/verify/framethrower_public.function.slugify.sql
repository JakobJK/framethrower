-- Verify flipr:framethrower_public.function.slugify on pg

BEGIN;

  CREATE OR REPLACE FUNCTION framethrower_public.test_slugify() RETURNS BOOLEAN AS $$
    declare slug1 text;
    declare slug2 text;
    declare slug3 text;
    BEGIN
      SELECT * INTO slug1 FROM framethrower_public.slugify('This is a test!');
      SELECT * INTO slug2 FROM framethrower_public.slugify('Bug Behemoth Test.');
      SELECT * INTO slug3 FROM framethrower_public.slugify('This is my own version - of a test - test Test.');
      RETURN true;
    END;
  $$ LANGUAGE plpgsql;

  SELECT framethrower_public.test_slugify();

ROLLBACK;