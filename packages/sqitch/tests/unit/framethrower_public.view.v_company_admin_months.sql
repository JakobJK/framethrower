begin;
  select plan(1);
  select has_view('framethrower_public', 'v_company_admin_months', 'v_company_admin_months exists' );
  select * from finish();
rollback;