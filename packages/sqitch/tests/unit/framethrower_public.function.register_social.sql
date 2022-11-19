begin;
select plan(2);
select has_function(
    'framethrower_public',
    'register_social',
    Array['text', 'text', 'text', 'text', 'text', 'text', 'text', 'text'],
    'register_social exists'
);

select function_returns('framethrower_public', 'register_social', 'framethrower_public.profile_social', 'register_social returns framethrower_public.profile');

select * from finish();
rollback;