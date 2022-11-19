-- Deploy flipr:framethrower_public.function.register_new_banner to pg

begin;
  create or replace function framethrower_public.register_new_banner(banner_ text)
    returns framethrower_public.profile as $$
      update framethrower_public.profile set banner = banner_ where id = current_setting('jwt.claims.id', true)::uuid returning *;
    $$ language sql;
  grant execute on function framethrower_public.register_new_banner(text) to framethrower_admin, framethrower_moderator, framethrower_user;
commit;

