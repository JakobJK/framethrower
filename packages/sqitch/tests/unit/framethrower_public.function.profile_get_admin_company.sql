begin;
select plan(2);

-- Function does indeed exists
select has_function(
    'framethrower_public',
    'profile_get_admin_company',
    ARRAY['framethrower_public.profile'],
    'profile_get_admin_company exists'
);
select function_returns('framethrower_public', 'profile_get_admin_company', 'text', 'profile_get_admin_company returns boolean');

select * from finish();
rollback;