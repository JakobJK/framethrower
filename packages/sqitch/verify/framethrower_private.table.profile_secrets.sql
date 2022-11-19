-- Verify flipr:framethrower_private.table.profile_secrets on pg

BEGIN;

  -- CREATE OR REPLACE FUNCTION framethrower_public.test_profile_secrets() RETURNS BOOLEAN AS $$
  --   DECLARE profile1 framethrower_public.profile;
  --   BEGIN

  --   INSERT INTO framethrower_public.profile(username, firstname, lastname) VALUES ('justAUser', 'MrJackson', 'ForReal') RETURNING * INTO profile1;

  --   INSERT INTO framethrower_private.profile_secrets(
  --     profile_id,
  --     email
  --   ) values (
  --           profile1.id,
  --     'jaketestattest@gmail.com'
  --   );

  --   PERFORM 1/COUNT(*) FROM framethrower_private.profile_secrets
  --   WHERE email = 'jaketestattest@gmail.com';

  --   RETURN true;
  -- END;
  -- $$ LANGUAGE plpgsql;

  -- SELECT framethrower_public.test_profile_secrets();

ROLLBACK;
