begin;
  select plan(1);
  select has_view('framethrower_public', 'v_own_note', 'v_own_note exists' );
  select * from finish();
rollback;