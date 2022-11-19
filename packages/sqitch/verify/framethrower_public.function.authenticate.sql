-- Verify flipr:framethrower_public.function.authenticate on pg

BEGIN;

  CREATE OR REPLACE FUNCTION framethrower_public.test_authenticate() RETURNS BOOLEAN AS $$
    declare new_profile framethrower_public.profile;
    declare token framethrower_public.jwt_token;
    BEGIN

    PERFORM framethrower_public.register_profile('thisistodatally', '438vrsjvrdadashvrsuvhshuvrs@438vrsjvrshvrsuvhshuvrs.com', '1234');

    SELECT * FROM framethrower_public.profile INTO new_profile
    WHERE username = 'thisistodatally';


    PERFORM 1 / COUNT(*) FROM framethrower_private.profile_secrets WHERE profile_id = new_profile.id;
    RETURN true;

    SELECT 1 / COUNT(*) FROM framethrower_public.authenticate('438vrsjvrdadashvrsuvhshuvrs@438vrsjvrshvrsuvhshuvrs.com', '1234');


  END;
  $$ LANGUAGE plpgsql;

  SELECT framethrower_public.test_authenticate();

ROLLBACK;
