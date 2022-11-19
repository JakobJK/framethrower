-- Deploy flipr:framethrower_public.function.profile_daily_posts to pg

BEGIN;

create or replace function framethrower_public.profile_daily_posts(profile framethrower_public.profile) returns int as $$
  select coalesce((select premium_definition.daily_posts
  from framethrower_public.premium
  join framethrower_public.premium_definition on premium_definition.id = premium.premium_definition_id
  where premium.profile_id = profile.id), 4);
$$ language sql stable;

grant execute on function framethrower_public.profile_daily_posts(framethrower_public.profile) to framethrower_inactive, framethrower_banned, framethrower_user, framethrower_moderator, framethrower_anonymous;

COMMIT;
