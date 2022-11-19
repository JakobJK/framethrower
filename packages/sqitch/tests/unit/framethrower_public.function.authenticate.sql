begin;
  select plan(2);
  select has_function('framethrower_public', 'authenticate', Array['text', 'text'], 'animation_pending_feedback exists');
  select function_returns('framethrower_public', 'authenticate', 'framethrower_public.jwt_token', 'authenticate returns jwt_token');
  select * from finish();
rollback;