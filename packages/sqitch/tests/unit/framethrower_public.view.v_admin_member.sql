begin;
  select plan(1);
  select has_view('framethrower_public', 'v_admin_member', 'v_admin_member exists' );
  select * from finish();
rollback;