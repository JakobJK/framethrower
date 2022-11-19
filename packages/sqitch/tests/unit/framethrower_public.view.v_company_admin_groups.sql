begin;
  select plan(1);
  select has_view('framethrower_public', 'v_company_admin_groups', 'v_company_admin_groups exists' );
  select * from finish();
rollback;