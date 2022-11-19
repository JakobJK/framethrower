begin;
  select plan(2);
  select has_function('framethrower_public', 'submission_is_latest', array['framethrower_public.submission'], 'submission_is_latest exists');
  select function_returns('framethrower_public', 'submission_is_latest', 'boolean', 'submission_is_latest returns void');

  select * from finish();
rollback;