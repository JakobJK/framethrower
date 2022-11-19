begin;
  select plan(2);
  select has_function('framethrower_public', 'instructor_update_bio', Array['text'],  'instructor_register_bio exists');
  select function_returns('framethrower_public', 'instructor_update_bio', 'framethrower_public.instructor', 'instructor_register_bio returns framethrower_public.instructor');
  select * from finish();
rollback;