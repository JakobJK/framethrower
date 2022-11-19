begin;
select plan(2);

-- Function does indeed exists
select has_function(
    'framethrower_public',
    'news_by_slug',
    ARRAY['text'],
    'news_by_slug exists'
);
select function_returns('framethrower_public', 'news_by_slug', 'framethrower_public.v_post', 'news_by_slug returns boolean');

select * from finish();
rollback;