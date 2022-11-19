-- deploy flipr:framethrower_public.function.register_profile to pg

begin;

  create or replace function framethrower_public.register_profile(
    username text,
    email text,
    pass text
    )returns framethrower_public.profile as $$
    declare new_profile framethrower_public.profile;
    declare _current_amount_of_users integer;
    declare _max_allowed_users integer;
    declare _user_registration_cap boolean;
    declare _enable_users_login boolean;
    begin
      select NULLIF(value, '')::int from framethrower_private.global_settings where name = 'max_allowed_users' into _max_allowed_users;
      select value::boolean from framethrower_private.global_settings where name = 'user_registration_cap' into _user_registration_cap;
      select value::boolean from framethrower_private.global_settings where name = 'enable_users_login' into _enable_users_login;
      if _enable_users_login = False then
        return null;
      end if;
      if _user_registration_cap = True then
        select count(*) from framethrower_public.profile into _current_amount_of_users;
        if _current_amount_of_users >= _max_allowed_users then
          return null;
        end if;
      end if;
      insert into framethrower_public.profile
        (username)
      values
        (username)
      returning * into new_profile;
      insert into framethrower_private.profile_secrets
      (profile_id, email, password_hash, framethrower_serial_key)
      values
      (new_profile.id, email, crypt(pass, gen_salt('bf')), uuid_generate_v4());
      return new_profile;
    end;
  $$ language plpgsql strict security definer;

  grant execute on function framethrower_public.register_profile(text, text, text) to framethrower_anonymous;

commit;