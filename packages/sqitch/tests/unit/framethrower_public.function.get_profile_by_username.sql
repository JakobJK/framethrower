begin;
  select plan(2);
  select has_function('framethrower_public', 'get_profile_by_username', Array['text'],  'get_profile_by_username exists');
  select function_returns('framethrower_public', 'get_profile_by_username', 'framethrower_public.profile', 'get_profile_by_username returns framethrower_public.profile');
  select * from finish();
rollback;