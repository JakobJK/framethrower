-- Deploy flipr:framethrower_public.function.register_note to pg

begin;
  create or replace function framethrower_public.register_note(submission_id text, body text, paragraph text)
    returns framethrower_public.note as $$
      insert into framethrower_public.note (body, profile_id, submission_id, paragraph)
      select body, current_setting('jwt.claims.id')::uuid, submission_id, paragraph WHERE not exists(select * from framethrower_public.animation join framethrower_public.submission ON submission.animation_id = animation.id where submission.id = submission_id and animation.profile_id = current_setting('jwt.claims.id')::uuid) returning *;
    $$ language sql;
  grant execute on function framethrower_public.register_note(text, text, text) to framethrower_admin, framethrower_moderator, framethrower_user;
commit;
