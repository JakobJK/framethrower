begin;
  select plan(2);
  select has_function('framethrower_public', 'delete_own_note_comment', array['uuid'], 'delete_own_note_comment exists');
  select function_returns('framethrower_public', 'delete_own_note_comment', 'framethrower_public.note_comment', 'delete_own_note_comment returns framethrower_public.note_comment');
  select * from finish();
rollback;