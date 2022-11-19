begin;
select plan(2);
select has_function(
    'framethrower_public',
    'register_news_comment',
    Array['text', 'uuid'],
    'register_news_comment exists'
);
select function_returns('framethrower_public', 'register_news_comment', 'framethrower_public.news_comment', 'register_news_comment returns framethrower_public.profile');

select * from finish();
rollback;