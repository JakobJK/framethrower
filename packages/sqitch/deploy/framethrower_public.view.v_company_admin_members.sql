-- Deploy framethrower:framethrower_public.view.v_company_admin_members to pg

begin;

  create view framethrower_public.v_company_admin_members as
  select
  premium.id premium_id,
  profile.username,
  profile.avatar,
  profile.firstname,
  profile.lastname,
  company_pro_group.id group_id,
  company_pro_group.group_name
  from framethrower_public.premium
  join framethrower_public.profile on premium.profile_id = profile.id
  left join framethrower_public.company_group_premium ON company_group_premium.premium_id = premium.id
  left join framethrower_public.company_pro_group ON company_pro_group.id = company_group_premium.company_group_id
  where premium.company_id = (select company_id from framethrower_public.company_admin_users where profile_id = coalesce(current_setting('jwt.claims.id', true), '00000000-0000-0000-0000-000000000000')::uuid);

  grant select on framethrower_public.v_company_admin_members to framethrower_user, framethrower_moderator, framethrower_admin;

commit;