begin;
  select plan(2);
  select has_function('framethrower_public', 'update_own_note_comment', array['text', 'text'], 'update_own_note_comment exists');
  select function_returns('framethrower_public', 'update_own_note_comment', 'framethrower_public.note_comment', 'update_own_note_comment returns void');
  select * from finish();
rollback;