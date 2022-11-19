-- Deploy flipr:framethrower_public.function.update_own_note to pg

begin;
  create or replace function framethrower_public.update_own_note(body_ text, paragraph_ text, id_ text)
    returns framethrower_public.note as $$
      update framethrower_public.note
      set paragraph = paragraph_,
      body = body_, updated_at = now()
      where note.profile_id = current_setting('jwt.claims.id', true)::uuid
      and note.id = id_ returning *;
    $$ language sql security definer;
  grant execute on function framethrower_public.update_own_note(text, text, text) to framethrower_user, framethrower_moderator, framethrower_admin;
commit;