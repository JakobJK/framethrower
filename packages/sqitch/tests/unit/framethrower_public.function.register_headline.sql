begin;
select plan(2);
select has_function(
    'framethrower_public',
    'register_headline',
    Array['text', 'text', 'text'],
    'register_headline exists'
);
select function_returns('framethrower_public', 'register_headline', 'framethrower_public.headline', 'register_headline returns framethrower_public.animation');

select * from finish();
rollback;