begin;
  select plan(2);
  select has_function('framethrower_public', 'instructor_currently_responding', Array['framethrower_public.instructor'],  'instructor_currently_responding exists');
  select function_returns('framethrower_public', 'instructor_currently_responding', 'boolean', 'instructor_currently_responding returns boolean');
  select * from finish();
rollback;