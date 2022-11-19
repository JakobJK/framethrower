-- Deploy framethrower:framethrower_public.function.instructor_update_availability to pg

begin;
  create or replace function framethrower_public.instructor_update_availability(availability_ framethrower_public.instructor_availability) returns framethrower_public.instructor as $$
    update framethrower_public.instructor set availability = availability_  where profile_id = current_setting('jwt.claims.id', true)::uuid returning *;
  $$ language sql;
  grant execute on function framethrower_public.instructor_update_availability(framethrower_public.instructor_availability) to framethrower_user, framethrower_moderator, framethrower_admin;
commit;
