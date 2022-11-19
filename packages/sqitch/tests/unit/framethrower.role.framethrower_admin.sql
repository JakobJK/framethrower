begin;
  select plan(1);
  SELECT has_role('framethrower_admin', 'framethrower_admin exists' );
  select * from finish();
rollback;