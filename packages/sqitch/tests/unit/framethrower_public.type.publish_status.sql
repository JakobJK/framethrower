
begin;
  select plan(1);
    select has_type( 'framethrower_public', 'publish_status', 'publish_status type exists on framethrower_public' );
  select * from finish();
rollback;
