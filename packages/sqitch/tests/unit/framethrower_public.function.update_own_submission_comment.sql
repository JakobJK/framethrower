begin;
  select plan(2);
  select has_function('framethrower_public', 'update_own_submission_comment', array['text', 'text', 'text'], 'update_own_submission_comment exists');
  select function_returns('framethrower_public', 'update_own_submission_comment', 'framethrower_public.submission', 'update_own_submission_comment returns framethrower_public.submission');
  select * from finish();
rollback;