-- Deploy flipr:framethrower_public.function.register_profile_details to pg

BEGIN;

  create or replace function framethrower_public.register_profile_details(
      firstname_ text,
      lastname_ text,
      occupation_ text,
      organisation_ text,
      about_ text
    ) returns framethrower_public.profile as $$
      update framethrower_public.profile
      set firstname = firstname_,
      lastname = lastname_,
      occupation = occupation_,
      organisation = organisation_,
      about = about_
      where id = current_setting('jwt.claims.id')::UUID
      returning *;
  $$ language sql;

  grant execute on function framethrower_public.register_profile_details(text, text, text, text, text) to framethrower_inactive, framethrower_user, framethrower_moderator, framethrower_admin; 

COMMIT;
