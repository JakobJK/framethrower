begin;
  select plan(2);
  select has_function('framethrower_public', 'submission_current_profile_has_replied', array['framethrower_public.submission'], 'submission_current_profile_has_replied exists');
  select function_returns('framethrower_public', 'submission_current_profile_has_replied', 'boolean', 'submission_current_profile_has_replied returns void');

  select * from finish();
rollback;