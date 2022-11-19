-- Deploy framethrower:framethrower_public.function.delete_own_note to pg

begin;

  create or replace function framethrower_public.delete_own_note(_id text) returns framethrower_public.note as $$
    update framethrower_public.note set status = 'deleted' where id = _id and profile_id = current_setting('jwt.claims.id', true)::uuid returning *;
  $$ language sql security definer;

  grant execute on function framethrower_public.delete_own_note(text) to framethrower_user, framethrower_moderator, framethrower_admin;
commit;