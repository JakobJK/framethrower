-- Deploy framethrower:framethrower_public.function.delete_own_note_comment to pg


begin;

  create or replace function framethrower_public.delete_own_note_comment(_id uuid) returns framethrower_public.note_comment as $$
    update framethrower_public.note_comment set status = 'deleted' where id = _id and profile_id = current_setting('jwt.claims.id', true)::uuid returning note_comment.*;
  $$ language sql security definer;
  grant execute on function framethrower_public.delete_own_note_comment(uuid) to framethrower_user, framethrower_moderator, framethrower_admin;

commit;