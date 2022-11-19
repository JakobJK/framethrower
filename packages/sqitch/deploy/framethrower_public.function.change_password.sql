-- Deploy flipr:framethrower_public.function.change_password to pg

begin;

create or replace function framethrower_public.change_password(
  current_password text,
  new_password text,
  repeated_new_password text
  )returns boolean as $$
  declare prof framethrower_public.profile;
  declare password_hash_ VARCHAR;
  begin
    select *
    from framethrower_public.profile
    where id = current_setting('jwt.claims.id', true)::uuid into prof;
    select password_hash from framethrower_private.profile_secrets
    where profile_id = prof.id into password_hash_;
    if new_password != repeated_new_password then
      return false;
    end if;
    if password_hash_ != crypt(current_password, password_hash_) then
      return false;
    end if;
    update framethrower_private.profile_secrets set password_hash = crypt(new_password, gen_salt('bf')) where profile_id = prof.id;
    return true;
  end;
$$ language plpgsql security definer strict;

grant execute on function framethrower_public.change_password to framethrower_inactive, framethrower_user, framethrower_moderator, framethrower_admin;

commit;
