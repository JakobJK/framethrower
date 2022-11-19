begin;
  select plan(1);
  select has_view('framethrower_public', 'v_feedback', 'v_animation exists' );
  select * from finish();
rollback;