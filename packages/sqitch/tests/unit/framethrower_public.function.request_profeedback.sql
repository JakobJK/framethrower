begin;
  select plan(2);
  select has_function('framethrower_public', 'request_profeedback', 'register_tumbleweed exists');
  select function_returns('framethrower_public', 'request_profeedback', 'boolean', 'request_profeedback returns boolean');
  select * from finish();
rollback;