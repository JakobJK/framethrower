begin;
  select plan(2);
  select has_function('framethrower_public', 'delete_own_animation', array['text'], 'delete_own_animation exists');
  select function_returns('framethrower_public', 'delete_own_animation', 'text', 'delete_own_animation returns text');
  select * from finish();
rollback;