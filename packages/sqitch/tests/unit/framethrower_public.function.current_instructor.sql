begin;
  select plan(2);
  select has_function('framethrower_public', 'current_instructor', 'current_instructor exists');
  select function_returns('framethrower_public', 'current_instructor', 'framethrower_public.instructor', 'current_instructor returns framethrower_public.instructor');
  select * from finish();
rollback;