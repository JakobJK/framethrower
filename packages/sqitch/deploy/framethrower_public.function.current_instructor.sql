-- Deploy flipr:framethrower_public.function.current_instructor to pg

begin;
  create or replace function framethrower_public.current_instructor() returns framethrower_public.instructor as $$
    select *
    from framethrower_public.instructor
    where profile_id = current_setting('jwt.claims.id', true)::uuid
  $$ language sql stable;
  grant execute on function framethrower_public.current_instructor to framethrower_anonymous, framethrower_user, framethrower_moderator, framethrower_admin;
commit;
