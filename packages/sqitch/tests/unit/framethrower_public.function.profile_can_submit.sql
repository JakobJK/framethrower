begin;
select plan(2);

-- Function does indeed exists
select has_function(
    'framethrower_public',
    'profile_can_submit',
    ARRAY['framethrower_public.profile'],
    'profile_can_submit exists'
);
select function_returns('framethrower_public', 'profile_can_submit', 'boolean', 'profile_can_submit returns boolean');

select * from finish();
rollback;