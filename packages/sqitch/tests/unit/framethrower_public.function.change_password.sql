begin;
  select plan(2);
  select has_function('framethrower_public', 'change_password', Array['text', 'text', 'text'], 'animation_pending_feedback exists');
  select function_returns('framethrower_public', 'change_password', 'boolean', 'change_password returns boolean');
  select * from finish();
rollback;