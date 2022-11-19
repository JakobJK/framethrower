begin;
  select plan(1);
  SELECT has_role('framethrower_inactive', 'framethrower_inactive exists' );
  select * from finish();
rollback;