-- Deploy flipr:framethrower_public.view.v_admin_members to pg

begin;
  create view framethrower_public.v_admin_member as
  select prof.id,
  prof.avatar,
  prof.username,
  prof.role,
  prof.firstname,
  prof.lastname,
  prof.created_at,
  coalesce((select status from framethrower_public.instructor where profile_id = prof.id), 'not_instructor')
   as is_instructor from framethrower_public.profile prof left join framethrower_public.instructor inst ON inst.profile_id = prof.id;

  grant select on framethrower_public.v_admin_member to framethrower_admin;

end;