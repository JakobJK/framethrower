begin;
select plan(2);
select has_function(
    'framethrower_public',
    'register_new_avatar',
    Array['text'],
    'register_new_avatar exists'
);
select function_returns('framethrower_public', 'register_new_avatar', 'framethrower_public.profile', 'register_new_avatar returns framethrower_public.profile');

select * from finish();
rollback;