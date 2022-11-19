begin;
  select plan(2);
  select has_function('framethrower_public', 'company_admin_add_premium_to_group', Array['uuid', 'uuid'], 'company_admin_add_premium_to_group exists');
  select function_returns('framethrower_public', 'company_admin_add_premium_to_group', 'framethrower_public.company_group_premium', 'company_admin_add_premium_to_group returns framethrower_public.company_group_premium');
  select * from finish();
rollback;