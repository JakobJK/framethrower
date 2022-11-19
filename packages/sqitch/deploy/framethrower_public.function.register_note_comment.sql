-- Deploy flipr:framethrower_public.function.register_note_comment to pg

BEGIN;

  create or replace function framethrower_public.register_note_comment(
    note_id text,
    body text
    )returns framethrower_public.note_comment as $$
    declare note framethrower_public.note_comment;
    begin
    insert into framethrower_public.note_comment
    (body, profile_id, note_id)
    values
    (body, current_setting('jwt.claims.id')::UUID, note_id);
    return note;
  end;
  $$ language plpgsql strict security definer;
grant execute on function framethrower_public.register_note_comment(text, text) to framethrower_user, framethrower_moderator, framethrower_admin;

COMMIT;
