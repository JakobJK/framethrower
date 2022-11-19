begin;
  select plan(2);
  select has_function('framethrower_public', 'current_profile', 'current_profile exists');
  select function_returns('framethrower_public', 'current_profile', 'framethrower_public.profile', 'current_profile returns framethrower_public.profile');
  select * from finish();
rollback;