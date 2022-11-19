begin;
  select plan(1);
  select has_view('framethrower_public', 'v_pro_list', 'v_pro_list exists' );
  select * from finish();
rollback;