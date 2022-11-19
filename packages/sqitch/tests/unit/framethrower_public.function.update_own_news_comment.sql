begin;
  select plan(2);
  select has_function('framethrower_public', 'update_own_news_comment', array['text', 'uuid'], 'update_own_news_comment exists');
  select function_returns('framethrower_public', 'update_own_news_comment', 'framethrower_public.news_comment', 'update_own_news_comment returns void');
  select * from finish();
rollback;