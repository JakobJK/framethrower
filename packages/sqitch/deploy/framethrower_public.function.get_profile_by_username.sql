-- Deploy flipr:framethrower_public.function.get_profile_by_username to pg

begin;

  create or replace function framethrower_public.get_profile_by_username(_username text) returns framethrower_public.profile as $$
    select *
    from framethrower_public.profile
    where lower(profile.username) = _username;
  $$ language sql stable;
  grant execute on function framethrower_public.get_profile_by_username to framethrower_admin;

commit;
