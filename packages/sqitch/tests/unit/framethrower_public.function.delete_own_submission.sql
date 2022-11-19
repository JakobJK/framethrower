begin;
  select plan(2);
  select has_function('framethrower_public', 'delete_own_submission', array['text'], 'delete_own_submission exists');
  select function_returns('framethrower_public', 'delete_own_submission', 'text', 'delete_own_submission returns text');
  select * from finish();
rollback;