begin;
  select plan(2);
  select has_function('framethrower_public', 'submission_has_pro_feedback', array['framethrower_public.submission'], 'submission_has_pro_feedback exists');
  select function_returns('framethrower_public', 'submission_has_pro_feedback', 'boolean', 'submission_has_pro_feedback returns void');

  select * from finish();
rollback;