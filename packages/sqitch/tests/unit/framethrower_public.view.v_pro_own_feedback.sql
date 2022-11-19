begin;
  select plan(1);
  select has_view('framethrower_public', 'v_pro_own_feedback', 'v_pro_own_feedback exists' );
  select * from finish();
rollback;