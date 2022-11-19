begin;
select plan(2);
select has_function(
    'framethrower_public',
    'register_new_banner',
    Array['text'],
    'register_new_banner exists'
);
select function_returns('framethrower_public', 'register_new_banner', 'framethrower_public.profile', 'register_new_banner returns framethrower_public.profile');

select * from finish();
rollback;