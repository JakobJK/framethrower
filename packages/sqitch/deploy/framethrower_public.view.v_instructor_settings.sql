-- Deploy framethrower:framethrower_public.view.v_instructor_settings to pg

begin;

  create view framethrower_public.v_instructor_settings as
  select distinct id, created_at, updated_at, accepted_agreement, status, biography, banner, availability from framethrower_public.instructor where profile_id = current_setting('jwt.claims.id', true)::uuid;
  grant select on framethrower_public.v_instructor_settings to framethrower_user, framethrower_moderator, framethrower_admin;

commit;
