-- Verify flipr:framethrower_public.function.register_user on pg

begin;

  create or replace function framethrower_public.test_register_profile() returns boolean as $$
    declare new_profile framethrower_public.profile;
    begin

    perform framethrower_public.register_profile('thisistodatally', '438vrsjvrdadashvrsuvhshuvrs@438vrsjvrshvrsuvhshuvrs.com', '1234');

    select * from framethrower_public.profile into new_profile
    where username = 'thisistodatally';


    perform 1 / count(*) from framethrower_private.profile_secrets where profile_id = new_profile.id;
    return true;

    end;
    $$ language plpgsql;

    select framethrower_public.test_register_profile();


rollback;
