-- Deploy flipr:framethrower_public.function.profile_is_instructor to pg

begin;

  create function framethrower_public.profile_is_instructor(profile framethrower_public.profile) returns framethrower_public.instructor_status as $$
    select coalesce((select status from framethrower_public.instructor where profile_id = profile.id), 'not_instructor'::framethrower_public.instructor_status)
  $$ language sql stable;
  grant execute on function framethrower_public.profile_is_instructor(framethrower_public.profile) to framethrower_anonymous, framethrower_inactive, framethrower_banned, framethrower_user, framethrower_moderator, framethrower_admin;

commit;
