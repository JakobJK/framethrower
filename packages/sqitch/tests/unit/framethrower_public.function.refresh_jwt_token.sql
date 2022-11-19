begin;
  select plan(2);
  select has_function('framethrower_public', 'refresh_jwt_token', 'refresh_jwt_token exists');
  select function_returns('framethrower_public', 'refresh_jwt_token', 'framethrower_public.jwt_token', 'refresh_jwt_token returns void');
  select * from finish();
rollback;