begin;

  create or replace function framethrower_public.is_registration_open()returns boolean as $$
    declare _current_amount_of_users integer;
    declare _max_allowed_users integer;
    declare _user_registration_cap boolean;
    declare _enable_users_login boolean;
    begin
      select NULLIF(value, '')::int from framethrower_private.global_settings where name = 'max_allowed_users' into _max_allowed_users;
      select value::boolean from framethrower_private.global_settings where name = 'user_registration_cap' into _user_registration_cap;
      select value::boolean from framethrower_private.global_settings where name = 'enable_users_login' into _enable_users_login;
      if _enable_users_login = False then
        return False;
      end if;
      if _user_registration_cap = True then
        select count(*) from framethrower_public.profile into _current_amount_of_users;
        if _current_amount_of_users >= _max_allowed_users then
          return False;
        end if;
      end if;
      return True;
      end;
  $$ language plpgsql stable security definer;
  grant execute on function framethrower_public.is_registration_open() to framethrower_anonymous, framethrower_admin, framethrower_moderator, framethrower_user;
commit;