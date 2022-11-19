begin;
  select plan(2);
  select has_function('framethrower_public', 'authenticate_by_username', Array['text', 'text'], 'animation_pending_feedback exists');
  select function_returns('framethrower_public', 'authenticate_by_username', 'framethrower_public.jwt_token', 'authenticate_by_username returns jwt_token');
  select * from finish();
rollback;