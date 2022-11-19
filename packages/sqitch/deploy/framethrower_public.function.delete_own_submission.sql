-- Deploy framethrower:framethrower_public.function.delete_own_submission to pg

begin;

  create or replace function framethrower_public.delete_own_submission(submission_id text) returns text as $$
    update framethrower_public.submission set status = 'deleted'
    from framethrower_public.animation
    where submission.id = submission_id and animation.profile_id = current_setting('jwt.claims.id', true)::uuid returning submission.id;
  $$ language sql security definer;
  grant execute on function framethrower_public.delete_own_submission(text) to framethrower_user, framethrower_moderator, framethrower_admin;

commit;