begin;
select plan(2);

-- Function does indeed exists
select has_function(
    'framethrower_public',
    'profile_daily_posts',
    ARRAY['framethrower_public.profile'],
    'profile_daily_posts exists'
);
select function_returns('framethrower_public', 'profile_daily_posts', 'integer', 'profile_daily_posts returns boolean');

select * from finish();
rollback;