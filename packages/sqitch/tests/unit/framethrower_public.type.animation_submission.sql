
begin;
  select plan(1);
    select has_type( 'framethrower_public', 'animation_submission', 'animation_submission type exists on framethrower_public' );
  select * from finish();
rollback;
