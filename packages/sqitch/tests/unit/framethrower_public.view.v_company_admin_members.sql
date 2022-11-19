begin;
  select plan(1);
  select has_view('framethrower_public', 'v_company_admin_members', 'v_company_admin_members exists' );
  select * from finish();
rollback;