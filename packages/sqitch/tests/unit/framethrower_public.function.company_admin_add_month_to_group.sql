begin;
  select plan(2);
  select has_function('framethrower_public', 'company_admin_add_month_to_group', Array['integer', 'integer', 'integer', 'uuid'], 'company_admin_add_month_to_group exists');
  select function_returns('framethrower_public', 'company_admin_add_month_to_group', 'framethrower_public.company_group_month', 'claim_feedback returns framethrower_public.profile');
  select * from finish();
rollback;