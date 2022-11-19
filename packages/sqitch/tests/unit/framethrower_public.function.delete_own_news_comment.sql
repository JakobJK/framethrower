begin;
  select plan(2);
  select has_function('framethrower_public', 'delete_own_news_comment', array['uuid'], 'delete_own_news_comment exists');
  select function_returns('framethrower_public', 'delete_own_news_comment', 'framethrower_public.news_comment', 'delete_own_news_comment returns framethrower_public.news_comment');
  select * from finish();
rollback;