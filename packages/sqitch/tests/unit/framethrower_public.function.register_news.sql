begin;
select plan(2);
select has_function(
    'framethrower_public',
    'register_news',
    Array['text', 'text', 'text', 'text', 'text', 'text'],
    'register_news exists'
);
select function_returns('framethrower_public', 'register_news', 'framethrower_public.news', 'register_news returns framethrower_public.profile');

select * from finish();
rollback;