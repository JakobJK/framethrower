begin;
  select plan(2);
  select has_function('framethrower_public', 'instructor_is_tilted', Array['framethrower_public.instructor'],  'instructor_is_tilted exists');
  select function_returns('framethrower_public', 'instructor_is_tilted', 'boolean', 'instructor_is_tilted returns boolean');
  select * from finish();
rollback;