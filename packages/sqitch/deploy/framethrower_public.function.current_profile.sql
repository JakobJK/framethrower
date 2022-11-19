-- Deploy flipr:framethrower_public.function.current_profile to pg

begin;
  create or replace function framethrower_public.current_profile() returns framethrower_public.profile as $$
    select *
    from framethrower_public.profile
    where id = nullif(current_setting('jwt.claims.id', true), '')::uuid
  $$ language sql stable;
  grant execute on function framethrower_public.current_profile to framethrower_inactive, framethrower_banned, framethrower_anonymous, framethrower_user, framethrower_moderator, framethrower_admin;
commit;

