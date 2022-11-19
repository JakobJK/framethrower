-- Deploy framethrower:framethrower_public.view.v_company_admin_months to pg

begin;

  create view framethrower_public.v_company_admin_months as
  select
  company_group_month.id,
  company_group_month.group_id,
  company_group_month.month,
  company_group_month.year,
  company_group_month.amount_feedbacks
  from framethrower_public.company_group_month
  join framethrower_public.company_pro_group ON company_pro_group.id = company_group_month.group_id

  where company_pro_group.company_id = (select company_id from framethrower_public.company_admin_users where profile_id = coalesce(current_setting('jwt.claims.id', true), '00000000-0000-0000-0000-000000000000')::uuid);

  grant select on framethrower_public.v_company_admin_months to framethrower_user, framethrower_moderator, framethrower_admin;

commit;