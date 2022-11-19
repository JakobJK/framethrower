begin;
  select plan(2);
  select has_function('framethrower_public', 'company_admin_remove_premium_from_group', Array['uuid'], 'company_admin_remove_premium_from_group exists');
  select function_returns('framethrower_public', 'company_admin_remove_premium_from_group', 'framethrower_public.company_group_premium', 'company_admin_remove_premium_from_group returns framethrower_public.company_group_premium');
  select * from finish();
rollback;