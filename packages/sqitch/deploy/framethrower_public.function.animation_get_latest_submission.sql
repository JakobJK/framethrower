-- Deploy framethrower:framethrower_public.function.animation_get_latest_submission to pg

-- Deploy flipr:framethrower_public.function.get_claimed_pending_feedback to pg

begin;
  create or replace function framethrower_public.animation_get_latest_submission(animation_ framethrower_public.animation) returns framethrower_public.submission as $$
    select submission.*
    from framethrower_public.submission
    where animation_id = animation_.id order by submission.created_at asc limit 1;
  $$ language sql stable;
  grant execute on function framethrower_public.animation_get_latest_submission to framethrower_anonymous, framethrower_inactive, framethrower_banned, framethrower_user, framethrower_moderator, framethrower_admin;
commit;