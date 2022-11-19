begin;
  select plan(2);
  select has_function('framethrower_public', 'claim_feedback', Array['text', 'text'], 'claim_feedback exists');
  select function_returns('framethrower_public', 'claim_feedback', 'framethrower_public.feedback_response', 'claim_feedback returns framethrower_public.profile');
  select * from finish();
rollback;