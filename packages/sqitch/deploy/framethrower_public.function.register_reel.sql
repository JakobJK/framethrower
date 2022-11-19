-- Deploy flipr:framethrower_public.function.register_reel to pg

begin;
  create or replace function framethrower_public.register_reel(reel_ text, reel_description_ text) returns framethrower_public.profile as $$
    update framethrower_public.profile set reel = reel_, reel_description = reel_description_ where id = current_setting('jwt.claims.id', true)::uuid returning *;
  $$ language sql;
  grant execute on function framethrower_public.register_reel(text, text) to framethrower_user, framethrower_inactive, framethrower_moderator, framethrower_admin;
commit;