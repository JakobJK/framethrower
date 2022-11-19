begin;
  select plan(1);
  select has_view('framethrower_public', 'v_post', 'v_post exists' );
  select * from finish();
rollback;