
begin;
  select plan(1);
    select has_type('framethrower_public', 'jwt_token', 'jwt_token type exists on framethrower_public' );
  select * from finish();
rollback;
