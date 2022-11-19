begin;
  select plan(2);
  select has_function('framethrower_public', 'update_own_note', array['text', 'text', 'text'], 'update_own_note exists');
  select function_returns('framethrower_public', 'update_own_note', 'framethrower_public.note', 'update_own_note returns void');
  select * from finish();
rollback;