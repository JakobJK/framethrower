-- Deploy flipr:framethrower_public.view.v_instructors to pg

begin;
  create view framethrower_public.v_instructor as
    select
      id,
      profile_id,
      created_at,
      updated_at,
      accepted_agreement,
      status,
      biography,
      banner,
      availability
      from framethrower_public.instructor where status = 'active';
    grant select on framethrower_public.v_instructor to
    framethrower_anonymous,
    framethrower_user,
    framethrower_moderator,
    framethrower_admin;
commit;