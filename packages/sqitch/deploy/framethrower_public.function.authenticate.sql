-- Deploy flipr:framethrower_public.function.authenticate to pg

begin;

  create or replace function framethrower_public.authenticate(
    email text,
    password text
  ) returns framethrower_public.jwt_token as $$
    select (role,
    profile_id,
    coalesce((select status from framethrower_public.instructor where instructor.profile_id = profile.id),'not_instructor')::framethrower_public.instructor_status,
    coalesce((select premium_definition.name
  from framethrower_public.premium
  join framethrower_public.premium_definition on premium_definition.id = premium.premium_definition_id
  where premium.profile_id = profile.id), 'default'))::framethrower_public.jwt_token
      from framethrower_private.profile_secrets
      join framethrower_public.profile on profile_id = id
      where profile_secrets.email = $1
        and profile_secrets.password_hash = crypt($2, profile_secrets.password_hash);
  $$ language sql strict security definer;
  grant execute on function framethrower_public.authenticate(text, text) to framethrower_anonymous;
commit;