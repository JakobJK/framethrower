begin;
  select plan(2);
  select has_function('framethrower_public', 'is_registration_open', 'is_registration_open exists');
  select function_returns('framethrower_public', 'is_registration_open', 'boolean', 'is_registration_open returns boolean');
  select * from finish();
rollback;