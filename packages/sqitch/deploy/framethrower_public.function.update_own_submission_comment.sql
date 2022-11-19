-- Deploy framethrower:framethrower_public.function.update_own_submission_comment to pg

begin;
  create or replace function framethrower_public.update_own_submission_comment(comment_ text, short_comment_ text, id_ text)
    returns framethrower_public.submission as $$
      update framethrower_public.submission
      set comment = comment_,
      short_comment = short_comment_,
      updated_at = now()
      from framethrower_public.animation
      where animation.profile_id = current_setting('jwt.claims.id', true)::uuid
      and submission.id = id_
      returning submission.*;
    $$ language sql security definer;
  grant execute on function framethrower_public.update_own_submission_comment(text, text, text) to framethrower_user, framethrower_moderator, framethrower_admin;
commit;