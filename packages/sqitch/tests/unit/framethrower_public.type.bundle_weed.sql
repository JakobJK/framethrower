
begin;
  select plan(1);
    select has_type('framethrower_public', 'bundle_weed', 'bundle_weed type exists on framethrower_public' );
  select * from finish();
rollback;
