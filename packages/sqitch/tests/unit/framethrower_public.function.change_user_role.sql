begin;
  select plan(2);
  select has_function('framethrower_public', 'change_user_role', Array['framethrower_public.user_role', 'uuid'], 'change_user_role exists');
  select function_returns('framethrower_public', 'change_user_role', 'framethrower_public.profile', 'change_user_role returns framethrower_public.profile');
  select * from finish();
rollback;