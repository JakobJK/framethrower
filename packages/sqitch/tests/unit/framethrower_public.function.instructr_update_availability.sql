begin;
  select plan(2);
  select has_function('framethrower_public', 'instructor_update_availability', Array['framethrower_public.instructor_availability'],  'instructor_update_availability exists');
  select function_returns('framethrower_public', 'instructor_update_availability', 'framethrower_public.instructor', 'instructor_update_availability returns framethrower_public.instructor');
  select * from finish();
rollback;