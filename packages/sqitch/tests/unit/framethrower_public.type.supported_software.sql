
begin;
  select plan(1);
    select has_type( 'framethrower_public', 'supported_software', 'supported_software type exists on framethrower_public' );
  select * from finish();
rollback;
