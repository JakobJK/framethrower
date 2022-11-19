
begin;
  select plan(1);
    select has_type('framethrower_public', 'premium_status', 'premium_status type exists on framethrower_public' );
  select * from finish();
rollback;
