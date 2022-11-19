begin;
  select plan(2);
  select has_function('framethrower_public', 'admin_update_post', Array['text', 'text', 'uuid'], 'animation_get_latest_submission exists');
  select function_returns('framethrower_public', 'admin_update_post', 'framethrower_public.news', 'admin_update_post returns framethrower_public.news');

  select * from finish();
rollback;