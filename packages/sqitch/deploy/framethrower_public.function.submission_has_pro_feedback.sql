-- Deploy flipr:framethrower_public.function.submission_has_pro_feedback to pg

begin;
  create or replace function framethrower_public.submission_has_pro_feedback(submission framethrower_public.submission) returns boolean as $$
    select exists(
      select * from framethrower_public.feedback_response where submission_id = submission.id and feedback_response.status = 'processed'
    )
  $$ language sql stable security definer;

  grant execute on function framethrower_public.submission_is_latest(submission framethrower_public.submission) to framethrower_inactive, framethrower_banned, framethrower_anonymous, framethrower_user, framethrower_moderator, framethrower_admin;
commit;

