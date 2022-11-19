begin;
  select plan(1);
  SELECT has_role('framethrower_user', 'framethrower_user exists' );
  select * from finish();
rollback;