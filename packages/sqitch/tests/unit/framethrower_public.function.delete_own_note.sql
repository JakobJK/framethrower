begin;
  select plan(2);
  select has_function('framethrower_public', 'delete_own_note', array['text'], 'delete_own_note exists');
  select function_returns('framethrower_public', 'delete_own_note', 'framethrower_public.note', 'delete_own_note returns framethrower_public.note');
  select * from finish();
rollback;