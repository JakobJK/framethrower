-- Deploy flipr:framethrower_public.function.profile_premium_type to pg

BEGIN;

create or replace function framethrower_public.profile_premium_type(profile framethrower_public.profile) returns framethrower_public.profile_premium as $$
  select coalesce((select premium_definition.name
  from framethrower_public.premium
  join framethrower_public.premium_definition on premium_definition.id = premium.premium_definition_id
  where premium.profile_id = profile.id), 'default');
$$ language sql stable;

grant execute on function framethrower_public.profile_premium_type(framethrower_public.profile) to framethrower_inactive, framethrower_banned, framethrower_user, framethrower_moderator, framethrower_anonymous;

COMMIT;