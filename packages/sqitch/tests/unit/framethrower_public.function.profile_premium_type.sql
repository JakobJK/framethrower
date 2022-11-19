begin;
select plan(2);

select has_function(
    'framethrower_public',
    'profile_premium_type',
    ARRAY['framethrower_public.profile'],
    'profile_premium_type exists'
);
select function_returns('framethrower_public', 'profile_premium_type', 'framethrower_public.profile_premium', 'profile_premium_type returns boolean');

select * from finish();
rollback;