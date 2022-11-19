begin;
select plan(2);
select has_function(
    'framethrower_public',
    'register_reel',
    Array['text', 'text'],
    'register_reel_detaisl exists'
);
select function_returns('framethrower_public', 'register_reel', 'framethrower_public.profile', 'register_reel returns framethrower_public.profile');

select * from finish();
rollback;