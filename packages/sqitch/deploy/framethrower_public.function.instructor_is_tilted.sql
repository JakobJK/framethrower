-- Deploy flipr:framethrower_public.function.instructor_is_tilted to pg

begin;
  create or replace function framethrower_public.instructor_is_tilted(instructor framethrower_public.instructor) returns boolean as $$
    select exists(select * from framethrower_public.feedback_response where updated_at + interval '6 hour' > NOW() and status = 'conceded' and feedback_response.profile_id = instructor.profile_id);
  $$ language sql stable;
  grant execute on function framethrower_public.instructor_is_tilted(framethrower_public.instructor) to framethrower_user, framethrower_moderator, framethrower_admin;
commit;
