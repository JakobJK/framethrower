begin;
  select plan(1);
  SELECT has_role('framethrower_anonymous', 'framethrower_anonymous exists' );
  select * from finish();
rollback;