-- Deploy framethrower:framethrower_public.view.v_company_admin_groups to pg


begin;

  create view framethrower_public.v_company_admin_groups as
  select
  company_pro_group.id,
  company_pro_group.group_name,
  company_pro_group.description,
  company_pro_group.slug,
  count(company_group_premium.id) as totalMembers
  from framethrower_public.company_pro_group
  left join framethrower_public.company_group_premium ON company_pro_group.id = company_group_premium.company_group_id
  where company_pro_group.company_id = (select company_id from framethrower_public.company_admin_users where profile_id = coalesce(current_setting('jwt.claims.id', true), '00000000-0000-0000-0000-000000000000')::uuid)
  group by company_pro_group.id;

  grant select on framethrower_public.v_company_admin_groups to framethrower_user, framethrower_moderator, framethrower_admin;

commit;