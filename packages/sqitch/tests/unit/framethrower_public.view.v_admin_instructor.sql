begin;
  select plan(1);
  select has_view( 'framethrower_public', 'v_admin_instructor', 'v_admin_instructor exists' );
  select * from finish();
rollback;