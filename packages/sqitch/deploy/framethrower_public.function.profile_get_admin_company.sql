-- Deploy flipr:framethrower_public.function.profile_get_admin_company to pg

begin;
  create or replace function framethrower_public.profile_get_admin_company(profile framethrower_public.profile)
  returns text as $$
  select company.name from framethrower_public.company join framethrower_public.company_admin_users ON company_admin_users.company_id = company.id where company_admin_users.profile_id = profile.id;
  $$ language sql security definer stable;
commit;


  grant execute on function framethrower_public.profile_get_admin_company(framethrower_public.profile) to framethrower_user, framethrower_moderator, framethrower_admin;
