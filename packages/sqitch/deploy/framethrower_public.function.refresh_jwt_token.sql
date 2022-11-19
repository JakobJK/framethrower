-- Deploy flipr:framethrower_public.function.refresh_jwt_token to pg

BEGIN;
  create or replace function framethrower_public.refresh_jwt_token() returns framethrower_public.jwt_token as $$
 select (role,
    profile_id,
    coalesce((select status from framethrower_public.instructor where instructor.profile_id = profile.id),'not_instructor')::framethrower_public.instructor_status,
    coalesce((select premium_definition.name
  from framethrower_public.premium
  join framethrower_public.premium_definition on premium_definition.id = premium.premium_definition_id
  where premium.profile_id = profile.id), 'default'))::framethrower_public.jwt_token
      from framethrower_private.profile_secrets
      join framethrower_public.profile on profile_id = id
      where profile.id = current_setting('jwt.claims.id', true)::uuid;
  $$ language sql strict security definer;
  grant execute on function framethrower_public.refresh_jwt_token() to framethrower_user, framethrower_moderator,framethrower_admin;
COMMIT;
