-- Deploy flipr:framethrower_public.function.profile_is_customer to pg

BEGIN;

  create or replace function framethrower_public.profile_has_customer_id(profile framethrower_public.profile) returns boolean as $$
    select exists(select id from framethrower_public.premium where profile_id = profile.id and premium.stripe_customer_id is not null);
  $$ language sql stable;
  grant execute on function framethrower_public.profile_has_customer_id(framethrower_public.profile) to framethrower_anonymous, framethrower_inactive, framethrower_banned, framethrower_user, framethrower_moderator, framethrower_admin;

COMMIT;
