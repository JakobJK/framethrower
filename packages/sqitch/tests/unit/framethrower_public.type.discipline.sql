
begin;
  select plan(1);
    select has_type('framethrower_public', 'discipline', 'discipline type exists on framethrower_public' );
  select * from finish();
rollback;
