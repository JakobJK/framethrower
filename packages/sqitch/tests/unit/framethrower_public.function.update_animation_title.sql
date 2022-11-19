begin;
  select plan(2);
  select has_function('framethrower_public', 'update_animation_title', array['text', 'text'], 'submission_is_latest exists');
  select function_returns('framethrower_public', 'update_animation_title', 'framethrower_public.animation', 'submission_is_latest returns void');
  select * from finish();
rollback;