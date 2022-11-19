begin;
  select plan(1);
  select pass('My test passed, w00t!');
  select * from finish();
rollback;