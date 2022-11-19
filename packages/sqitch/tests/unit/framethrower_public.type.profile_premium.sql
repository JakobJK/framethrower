
begin;
  select plan(1);
    select has_type('framethrower_public', 'profile_premium', 'profile_premium type exists on framethrower_public' );
  select * from finish();
rollback;
