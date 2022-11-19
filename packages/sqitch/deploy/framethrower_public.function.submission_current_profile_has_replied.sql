-- Deploy flipr:framethrower_public.function.submission_current_profile_has_replied to pg


begin;
  create or replace function framethrower_public.submission_current_profile_has_replied(submission framethrower_public.submission) returns boolean as $$
    select exists(select * from framethrower_public.note where submission_id = submission.id and profile_id = current_setting('jwt.claims.id', true)::uuid);
  $$ language sql stable;

  grant execute on function framethrower_public.submission_current_profile_has_replied(submission framethrower_public.submission) to framethrower_inactive, framethrower_banned, framethrower_anonymous, framethrower_user, framethrower_moderator, framethrower_admin;
commit;

