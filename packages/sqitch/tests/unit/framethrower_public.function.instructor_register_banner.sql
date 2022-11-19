begin;
  select plan(2);
  select has_function('framethrower_public', 'instructor_register_banner', Array['text'],  'instructor_register_banner exists');
  select function_returns('framethrower_public', 'instructor_register_banner', 'framethrower_public.instructor', 'instructor_register_banner returns framethrower_public.instructor');
  select * from finish();
rollback;