begin;
select plan(2);

-- Function does indeed exists
select has_function(
    'framethrower_public',
    'profile_get_built_in_feedback',
    ARRAY['framethrower_public.profile'],
    'profile_get_built_in_feedback exists'
);
select function_returns('framethrower_public', 'profile_get_built_in_feedback', 'integer', 'profile_get_built_in_feedback returns boolean');

select * from finish();
rollback;