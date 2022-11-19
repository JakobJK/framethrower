-- Deploy framethrower:framethrower_public.function.instructor_update_bio to pg

begin;
  create or replace function framethrower_public.instructor_update_bio(biography_ text) returns framethrower_public.instructor as $$
    update framethrower_public.instructor set biography = biography_ where profile_id = current_setting('jwt.claims.id', true)::uuid returning *;
  $$ language sql;
  grant execute on function framethrower_public.instructor_update_bio(text) to framethrower_user, framethrower_moderator, framethrower_admin;
commit;
