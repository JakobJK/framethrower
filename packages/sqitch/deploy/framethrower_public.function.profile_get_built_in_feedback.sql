-- Deploy flipr:framethrower_public.function.profile_get_built_in_feedback to pg

BEGIN;

  create or replace function framethrower_public.profile_get_built_in_feedback(profile framethrower_public.profile) returns integer as $$
    select coalesce((select premium.built_in_feedback from framethrower_public.premium where premium.profile_id = profile.id), 0) as built_in_feedback;
  $$ language sql stable;
  grant execute on function framethrower_public.profile_get_built_in_feedback(framethrower_public.profile) to framethrower_anonymous, framethrower_inactive, framethrower_banned, framethrower_user, framethrower_moderator, framethrower_admin;

COMMIT;

