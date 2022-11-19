-- Deploy flipr:framethrower_public.function.register_new_avatar to pg

begin;

  create or replace function framethrower_public.register_new_avatar(avatar_ text)
    returns framethrower_public.profile as $$
      update framethrower_public.profile set avatar = avatar_ where id = current_setting('jwt.claims.id', true)::uuid returning *;
    $$ language sql;

  grant execute on function framethrower_public.register_new_avatar(text) to framethrower_admin, framethrower_moderator, framethrower_user;

commit;
