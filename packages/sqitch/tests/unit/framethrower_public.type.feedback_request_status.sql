
begin;
  select plan(1);
    select has_type('framethrower_public', 'feedback_request_status', 'feedback_request_status type exists on framethrower_public' );
  select * from finish();
rollback;
