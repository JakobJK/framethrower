begin;
select plan(2);
select has_function(
    'framethrower_public',
    'register_profile',
    Array['text', 'text', 'text'],
    'register_profile_detaisl exists'
);
select function_returns('framethrower_public', 'register_profile', 'framethrower_public.profile', 'register_profile returns framethrower_public.profile');

select * from finish();
rollback;