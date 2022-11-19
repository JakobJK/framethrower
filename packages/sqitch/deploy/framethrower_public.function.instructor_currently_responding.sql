-- Deploy flipr:framethrower_public.function.instructor_currently_responding to pg
--
--  MAYBE WE DO NOT NEED THINS FUNCTION? LETS RECONSIDER
--
--
begin;
  create or replace function framethrower_public.instructor_currently_responding(profile framethrower_public.instructor) returns boolean as $$
  select exists(select id from framethrower_public.feedback_response where profile_id = current_setting('jwt.claims.id', true)::uuid and status = 'pending');
  $$ language sql stable;
  grant execute on function framethrower_public.instructor_currently_responding to framethrower_user, framethrower_moderator, framethrower_admin;
commit;