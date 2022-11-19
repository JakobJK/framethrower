begin;
  select plan(1);
  select has_view('framethrower_public', 'v_instructor_pool', 'v_animation exists' );
  select * from finish();
rollback;