
begin;
  select plan(1);
    select has_type( 'framethrower_public', 'user_role', 'user_role type exists on framethrower_public' );
  select * from finish();
rollback;
