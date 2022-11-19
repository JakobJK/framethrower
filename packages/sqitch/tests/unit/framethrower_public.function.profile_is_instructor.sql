begin;
select plan(2);

-- Function does indeed exists
select has_function(
    'framethrower_public',
    'profile_is_instructor',
    ARRAY['framethrower_public.profile'],
    'profile_is_instructor exists'
);
select function_returns('framethrower_public', 'profile_is_instructor', 'framethrower_public.instructor_status', 'profile_is_instructor returns boolean');

select * from finish();
rollback;