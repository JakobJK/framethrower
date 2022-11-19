begin;
  select plan(2);
  select has_function('framethrower_public', 'animation_pending_feedback', Array['framethrower_public.animation'], 'animation_pending_feedback exists');
  select function_returns('framethrower_public', 'animation_pending_feedback', 'boolean', 'animation_pending_feedback returns boolean');
  select * from finish();
rollback;