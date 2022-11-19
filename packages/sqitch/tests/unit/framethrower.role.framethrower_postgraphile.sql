begin;
  select plan(1);
  SELECT has_role('framethrower_postgraphile', 'framethrower_postgraphile exists' );
  select * from finish();
rollback;