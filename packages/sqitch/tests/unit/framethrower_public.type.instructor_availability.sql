
begin;
  select plan(1);
    select has_type('framethrower_public', 'instructor_availability', 'instructor_availability type exists on framethrower_public' );
  select * from finish();
rollback;
