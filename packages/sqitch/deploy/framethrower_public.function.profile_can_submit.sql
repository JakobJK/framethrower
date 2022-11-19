-- Deploy flipr:framethrower_public.function.profile_can_submit to pg

BEGIN;

create function framethrower_public.profile_can_submit(profile framethrower_public.profile)
  returns boolean as $$
    select count(*) < framethrower_public.profile_daily_posts(profile.*) from framethrower_public.submission
    join framethrower_public.animation ON animation.id = submission.animation_id
    where submission.created_at > now() - interval '1 day' and
    animation.profile_id = profile.id;
  $$ language sql stable;

grant execute on function framethrower_public.profile_can_submit(framethrower_public.profile) to
framethrower_inactive,
framethrower_banned,
framethrower_user,
framethrower_moderator,
framethrower_anonymous;

COMMIT;
