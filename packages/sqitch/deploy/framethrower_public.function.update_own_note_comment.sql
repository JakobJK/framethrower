-- Deploy flipr:framethrower_public.function.update_own_note_comment to pg

-- Deploy flipr:framethrower_public.function.update_own_note to pg

begin;
  create or replace function framethrower_public.update_own_note_comment(body_ text, id_ text)
    returns framethrower_public.note_comment as $$
      update framethrower_public.note_comment set body = body_, updated_at = now() where note_comment.profile_id = current_setting('jwt.claims.id', true)::uuid and note_comment.id = id_::uuid returning *;
    $$ language sql;
  grant execute on function framethrower_public.update_own_note_comment(text, text) to framethrower_user, framethrower_moderator, framethrower_admin;
commit;
